#include <WiFi.h>
#include <WiFiManager.h>
#include "EEPROM.h"
#include <MCP342x.h>
#include <Wire.h>
#include "REG_SDM120.h"
#include <ModbusMaster.h>
#include "PinStatusValve.h"

#include "Adafruit_MCP23017.h"
#include <PubSubClient.h>
#include <ArduinoJson.h>


const byte ADDRESS_MCP23017 =  0x27;
PinStatusValve pinValve[] = { PinStatusValve(6 , 7) ,  PinStatusValve(8 , 9) , PinStatusValve(10 , 11) , PinStatusValve(12 , 13) , PinStatusValve(14 , 15)};
int pinControlValve[] = {0 , 1 , 2 , 3 , 4};
long currentMillisValve = 0;
long previousMillisValve = 0;
#define INTERVAL_STATUSVALVE  1500

/*--------------------------ADDRESS ADC --------------------------*/

uint8_t address1 = 0x6E;
uint8_t address2 = 0x6A;
uint8_t address3 = 0x6B;
uint8_t address4 = 0x6D;

/*--------------------------------------------------------------------------*/



/*--------------------------WIFI SETTING Define --------------------------*/

#define SWMU 35
#define ADDRESSWIFI 10

/*--------------------------------------------------------------------------*/

#define mqtt_server "178.128.221.52"
#define mqtt_port 1883
#define mqtt_user "iot"
#define mqtt_password "5D7u%zS!-WY(N-C"

#define mqtt_status_valve "status/valve"
#define mqtt_control_valve_auto "status/valve/control/auto"
#define mqtt_control_valve_manual "status/valve/manual"

#define mqtt_id "WATERIOT1"

/*--------------------------Flow Sensor Define --------------------------*/


#define FLS1  36
#define FLS2  39
#define FLS3  34
#define INTERVAL_FLS  1000
#define CALEBRATIONFACTOR 4.5


/*--------------------------------------------------------------------------*/



/**--------------------------Variable FlowSensor *--------------------------*/
long currentMillis = 0;
long previousMillis = 0;

volatile byte pulseCountFLS1 = 0 ;
volatile byte pulseCountFLS2 = 0 ;
volatile byte pulseCountFLS3 = 0 ;

float flowRate1 = 0 ;
float flowRate2 = 0 ;
float flowRate3 = 0 ;


unsigned int flowMilliLitres1 = 0 ;
unsigned long totalMilliLitres1  = 0 ;

unsigned int flowMilliLitres2 = 0 ;
unsigned long totalMilliLitres2 = 0 ;

unsigned int flowMilliLitres3  = 0 ;
unsigned long totalMilliLitres3 = 0 ;

/*--------------------------------------------------------------------------*/



/**--------------------------Variable Water Pressure *--------------------------*/


int waterPressureIN = 0;
int waterPressureOUT = 0;

/*--------------------------------------------------------------------------*/


/**--------------------------Variable ADC *--------------------------*/
MCP342x adc1 = MCP342x(address1);  // WaterPressureOUT , WaterPressureOUT , TurbidityIN , TurbidityOUT
MCP342x adc2 = MCP342x(address2);  //TDSIN , TDSOUT , orpValueIN , orpValueOUT
MCP342x adc3 = MCP342x(address3);
MCP342x adc4 = MCP342x(address4);

/*--------------------------------------------------------------------------*/



/**--------------------------Variable Turbidity *--------------------------*/


int turbidityIN = 0;
int turbidityOUT = 0;

/*--------------------------------------------------------------------------*/


/**--------------------------Variable PH *--------------------------*/

int pHValueIN = 0;
int pHValueOUT = 0;

/*--------------------------------------------------------------------------*/


/**--------------------------Variable ORP *--------------------------*/

int orpValueIN = 0;
int orpValueOUT = 0;

/*--------------------------------------------------------------------------*/

/**--------------------------Variable TDS *--------------------------*/

int TDSIN = 0;
int TDSOUT = 0;

/*--------------------------------------------------------------------------*/


WiFiManager wifiManager;
ModbusMaster node;
WiFiClient espClient;
PubSubClient client(espClient);
Adafruit_MCP23017 mcp;
void setup() {

  Serial.begin(9600);

  Serial.println("Device Init");




  mcp.begin(ADDRESS_MCP23017);


  wifiSetting();

  initADC();
  initFlowSensor();
  setUpValve();
  client.setServer(mqtt_server, mqtt_port);

  client.setCallback(callback);



}

void loop() {


  if (!client.connected()) {
    Serial.print("MQTT connection…");

    if (client.connect(mqtt_id ,  mqtt_user, mqtt_password)) {

      client.subscribe(mqtt_control_valve_auto);
      client.subscribe(mqtt_control_valve_manual);

      Serial.println("connected");
    } else {
      Serial.print("failed, rc = ");
      Serial.print(client.state());
      Serial.println(" try again in 5 seconds");
      delay(5000);
      return;
    }


  }



  getFlowSensor() ;
  readADC1();
  readADC2();
  readADC3();

    GET_METER();


  sendDataSensor();

  sendDataValve();

  checkNeedResetWiFi();

  client.loop();



}



void callback(char* topic, byte* payload, unsigned int length) {

  String t = String(topic);
  char responseData[200];
  for (int i = 0; i < length; i++) {
    responseData[i] = (char)payload[i];
  }

  Serial.print("[ ");
  Serial.print(t);
  Serial.print(" ] : ");

  Serial.println(responseData);
  DynamicJsonBuffer jsonBuffer;
  JsonObject& root = jsonBuffer.parseObject(responseData);


  if (t == mqtt_control_valve_auto) {

    mqtt_valve_auto(root);

  }

  if (t == mqtt_control_valve_manual) {

    mqtt_control_manual(root);

  }


}


void sendDataSensor() {



  char data[300];
  String payload = "{ \"wpsIn\": " + String(waterPressureIN) +

                   " , \"wpsOut\": " + String(waterPressureOUT) +
                   " , \"turbidityIN\": " + String(turbidityIN) +
                   " , \"turbidityOUT\": " + String(turbidityOUT) +
                   " , \"flowRateIN\": " + String(flowRate1) +
                   " , \"flowRateOUT\": " + String(flowRate2) +
                   " , \"flowRateDrain\": " + String(flowRate3) +
                   " , \"TDSIN\": " + String(TDSIN) +
                   " , \"TDSOUT\": " + String(TDSOUT) +
                   " , \"orpIN\": " + String( orpValueIN) +
                   " , \"orpOUT\": " + String( orpValueOUT) +

                   " , \"pHIN\": " + String( pHValueIN) +
                   " , \"pHOUT\": " + String( pHValueOUT) +
                   " , \"kWh\": " + String( DATA_METER[5]) +

                   " }";


  payload.toCharArray(data, (payload.length() + 1));
  client.publish("status/sensor/iot", data);


}



void mqtt_valve_auto( JsonObject& root) {

  Serial.println("mqtt_control_auto");

  int status1 = root["v1"] ;
  int status2 = root["v2"] ;
  int status3 = root["v3"] ;
  int status4 = root["v4"] ;
  int status5 = root["v5"] ;


  int ols1 = (mcp.digitalRead(pinValve[0].getOLS()) == 0 ? 1 : 0) ;


  int ols2 =  (mcp.digitalRead(pinValve[1].getOLS()) == 0 ? 1 : 0) ;
  int ols3 =  (mcp.digitalRead(pinValve[2].getOLS()) == 0 ? 1 : 0) ;
  int ols4 = (mcp.digitalRead(pinValve[3].getOLS()) == 0 ? 1 : 0) ;
  int ols5 =  (mcp.digitalRead(pinValve[4].getOLS()) == 0 ? 1 : 0) ;



  if (ols1 != status1) {

    status1 = status1 == 1 ? 0 : 1;

    mcp.digitalWrite(0, status1 );
  }


  if (ols2 != status2) {

    status2 = status2 == 1 ? 0 : 1;

    mcp.digitalWrite(1, status2 );
  }

  if (ols3 != status3) {

    status3 = status3 == 1 ? 0 : 1;

    mcp.digitalWrite(2, status3 );
  }


  if (ols4 != status4) {

    status4 = status4 == 1 ? 0 : 1;

    mcp.digitalWrite(3, status4 );
  }


  if (ols5 != status5) {

    status5 = status5 == 1 ? 0 : 1;

    mcp.digitalWrite(4, status5 );
  }






}


void mqtt_control_manual( JsonObject& root) {


  Serial.println("mqtt_control_manual");

  int status1 = root["v1"] ;
  int status2 = root["v2"] ;
  int status3 = root["v3"] ;
  int status4 = root["v4"] ;
  int status5 = root["v5"] ;


  int ols1 = (mcp.digitalRead(pinValve[0].getOLS()) == 0 ? 1 : 0) ;


  int ols2 =  (mcp.digitalRead(pinValve[1].getOLS()) == 0 ? 1 : 0) ;
  int ols3 =  (mcp.digitalRead(pinValve[2].getOLS()) == 0 ? 1 : 0) ;
  int ols4 = (mcp.digitalRead(pinValve[3].getOLS()) == 0 ? 1 : 0) ;
  int ols5 =  (mcp.digitalRead(pinValve[4].getOLS()) == 0 ? 1 : 0) ;



  if (ols1 != status1) {

    status1 = status1 == 1 ? 0 : 1;

    mcp.digitalWrite(0, status1 );
  }


  if (ols2 != status2) {

    status2 = status2 == 1 ? 0 : 1;

    mcp.digitalWrite(1, status2 );
  }

  if (ols3 != status3) {

    status3 = status3 == 1 ? 0 : 1;

    mcp.digitalWrite(2, status3 );
  }


  if (ols4 != status4) {

    status4 = status4 == 1 ? 0 : 1;

    mcp.digitalWrite(3, status4 );
  }


  if (ols5 != status5) {

    status5 = status5 == 1 ? 0 : 1;

    mcp.digitalWrite(4, status5 );
  }






}



void sendDataValve() {



  currentMillisValve = millis();
  if (currentMillisValve - previousMillisValve > INTERVAL_STATUSVALVE) {


    int ols1 = (mcp.digitalRead(pinValve[0].getOLS()) == 0 ? 1 : 0) ;


    int ols2 =  (mcp.digitalRead(pinValve[1].getOLS()) == 0 ? 1 : 0) ;
    int ols3 =  (mcp.digitalRead(pinValve[2].getOLS()) == 0 ? 1 : 0) ;
    int ols4 = (mcp.digitalRead(pinValve[3].getOLS()) == 0 ? 1 : 0) ;
    int ols5 =  (mcp.digitalRead(pinValve[4].getOLS()) == 0 ? 1 : 0) ;


    char data[200];
    String payload = "{ \"v1\": " + String(ols1) + " , \"v2\": " + String(ols2) + " ,  \"v3\": " + String(ols3) + " ,  \"v4\": " + String(ols4) + " ,  \"v5\": " + String(ols5) + " }";


    payload.toCharArray(data, (payload.length() + 1));
    client.publish("status/valve/display", data);


    previousMillisValve = millis();
  }

}



void setUpValve() {

  for (int i = 0; i < (sizeof(pinControlValve) / sizeof(pinControlValve[0])); i++) {

    mcp.pinMode(pinControlValve[i], OUTPUT);
    delay(100);
  }

  for (int i = 0; i < (sizeof(pinValve) / sizeof(pinValve[0])); i++) {


    mcp.pinMode(pinValve[i].getOLS(), INPUT);
    mcp.pinMode(pinValve[i].getCLS(), INPUT);
    delay(100);
  }

  delay(500);



  int ols1 = (mcp.digitalRead(pinValve[0].getOLS()) == 0 ? 1 : 0) ;


  int ols2 =  (mcp.digitalRead(pinValve[1].getOLS()) == 0 ? 1 : 0) ;
  int ols3 =  (mcp.digitalRead(pinValve[2].getOLS()) == 0 ? 1 : 0) ;
  int ols4 = (mcp.digitalRead(pinValve[3].getOLS()) == 0 ? 1 : 0) ;
  int ols5 =  (mcp.digitalRead(pinValve[4].getOLS()) == 0 ? 1 : 0) ;


  if (ols1 == 1) {
    mcp.digitalWrite(0 , HIGH);

  }

  if (ols2 == 1) {
    mcp.digitalWrite(1 , HIGH);

  }


  if (ols3 == 1) {
    mcp.digitalWrite(2 , HIGH);

  }


  if (ols4 == 1) {
    mcp.digitalWrite(3 , HIGH);

  }


  if (ols5 == 1) {
    mcp.digitalWrite(4 , HIGH);

  }
  delay(2000);




}

float HexTofloat(uint32_t x) {
  return (*(float*)&x);
}

uint32_t FloatTohex(float x) {
  return (*(uint32_t*)&x);
}


float Read_Meter_float(char addr , uint16_t  REG) {
  float i = 0;
  uint8_t j, result;
  uint16_t data[2];
  uint32_t value = 0;
  node.begin(addr, Serial);
  result = node.readInputRegisters (REG, 2);
  delay(100);
  if (result == node.ku8MBSuccess) {
    for (j = 0; j < 2; j++)
    {
      data[j] = node.getResponseBuffer(j);
    }
    value = data[0];
    value = value << 16;
    value = value + data[1];
    i = HexTofloat(value);

    return i;
  } else {
    Serial.print("Connect modbus fail. REG >>> "); Serial.println(REG, HEX);
    return 0;
  }
}

void GET_METER() {

  for (char i = 0; i < Total_of_Reg ; i++) {
    DATA_METER [i] = Read_Meter_float(ID_meter, Reg_addr[i]);
  }
}


void readADC1() {



  long value = 0;
  long value2 = 0;
  long value3 = 0;
  long value4 = 0;


  MCP342x::Config status;
  uint8_t err = adc1.convertAndRead(MCP342x::channel1, MCP342x::oneShot,
                                    MCP342x::resolution18, MCP342x::gain1,
                                    1000000, value, status);


  err = adc1.convertAndRead(MCP342x::channel2, MCP342x::oneShot,
                            MCP342x::resolution18, MCP342x::gain1,
                            1000000, value2, status);


  err = adc1.convertAndRead(MCP342x::channel3, MCP342x::oneShot,
                            MCP342x::resolution18, MCP342x::gain1,
                            1000000, value3, status);

  err = adc1.convertAndRead(MCP342x::channel4, MCP342x::oneShot,
                            MCP342x::resolution18, MCP342x::gain1,
                            1000000, value4, status);

  if (err) {
    Serial.print("Convert error: ");
    Serial.println(err);
  }
  else {


    waterPressureIN = value;
    waterPressureOUT  = value2;
    turbidityIN = value3;
    turbidityOUT = value4;

  }


}


void readADC2() {


  long value = 0;
  long value2 = 0;
  long value3 = 0;
  long value4 = 0;


  int newRange;

  MCP342x::Config status;
  uint8_t err = adc2.convertAndRead(MCP342x::channel1, MCP342x::oneShot,
                                    MCP342x::resolution18, MCP342x::gain1,
                                    1000000, value, status);

  err = adc2.convertAndRead(MCP342x::channel2, MCP342x::oneShot,
                            MCP342x::resolution18, MCP342x::gain1,
                            1000000, value2, status);


  err = adc2.convertAndRead(MCP342x::channel3, MCP342x::oneShot,
                            MCP342x::resolution18, MCP342x::gain1,
                            1000000, value3, status);


  err = adc2.convertAndRead(MCP342x::channel4, MCP342x::oneShot,
                            MCP342x::resolution18, MCP342x::gain1,
                            1000000, value4, status);


  if (err) {
    Serial.print("Convert error: ");
    Serial.println(err);
  }
  else {

    TDSIN = value;
    TDSOUT = value2;
    orpValueIN  = value3;
    orpValueOUT = value4;
  }


}


void readADC3() {


  long value = 0;
  long value2 = 0;



  int newRange;

  MCP342x::Config status;
  uint8_t err = adc3.convertAndRead(MCP342x::channel1, MCP342x::oneShot,
                                    MCP342x::resolution18, MCP342x::gain1,
                                    1000000, value, status);

  err = adc2.convertAndRead(MCP342x::channel2, MCP342x::oneShot,
                            MCP342x::resolution18, MCP342x::gain1,
                            1000000, value2, status);





  if (err) {
    Serial.print("Convert error: ");
    Serial.println(err);
  }
  else {
    pHValueIN = value;
    pHValueOUT = value2 ;

  }


}

void IRAM_ATTR pulseCounterFLS1() {
  pulseCountFLS1++;
}

void IRAM_ATTR pulseCounterFLS2() {
  pulseCountFLS2++;
}


void IRAM_ATTR pulseCounterFLS3() {
  pulseCountFLS3++;
}


void initADC() {
  Wire.begin();


  MCP342x::generalCallReset();
  delay(1);

  Wire.requestFrom(address1, (uint8_t)1);
  if (!Wire.available()) {
    Serial.print("No device found at address ");
    Serial.println(address1, HEX);
    while (1)
      ;
  }


  Wire.requestFrom(address2, (uint8_t)1);
  if (!Wire.available()) {
    Serial.print("No device found at address ");
    Serial.println(address2, HEX);
    while (1)
      ;
  }


  Wire.requestFrom(address3, (uint8_t)1);
  if (!Wire.available()) {
    Serial.print("No device found at address ");
    Serial.println(address3, HEX);
    while (1)
      ;
  }
}

void initFlowSensor() {
  pinMode(FLS1, INPUT_PULLUP);
  pinMode(FLS2, INPUT_PULLUP);
  pinMode(FLS3, INPUT_PULLUP);

  attachInterrupt(digitalPinToInterrupt(FLS1), pulseCounterFLS1, FALLING);
  attachInterrupt(digitalPinToInterrupt(FLS2), pulseCounterFLS2, FALLING);
  attachInterrupt(digitalPinToInterrupt(FLS3), pulseCounterFLS3, FALLING);

}
void getFlowSensor() {


  currentMillis = millis();
  if (currentMillis - previousMillis > INTERVAL_FLS) {


    // Read Flow Sensor 1

    byte pulse1Sec = pulseCountFLS1;
    pulseCountFLS1 = 0;

    flowRate1 = ((1000.0 / (millis() - previousMillis)) * pulse1Sec) / CALEBRATIONFACTOR;


    flowMilliLitres1 = (flowRate1 / 60) * 1000;
    totalMilliLitres1 += flowMilliLitres1;


    // Read Flow Sensor 2

    pulse1Sec = pulseCountFLS2;
    pulseCountFLS2 = 0;

    flowRate2 = ((1000.0 / (millis() - previousMillis)) * pulse1Sec) / CALEBRATIONFACTOR;


    flowMilliLitres2 = (flowRate2 / 60) * 1000;
    totalMilliLitres2 += flowMilliLitres2;




    // Read Flow Sensor 3

    pulse1Sec = pulseCountFLS3;
    pulseCountFLS3 = 0;

    flowRate3 = ((1000.0 / (millis() - previousMillis)) * pulse1Sec) / CALEBRATIONFACTOR;
    previousMillis = millis();

    flowMilliLitres3 = (flowRate3 / 60) * 1000;
    totalMilliLitres3 += flowMilliLitres3;





    Serial.print("Flow rate 1: ");
    Serial.print(int(flowRate1));
    Serial.print("L/min");
    Serial.print("\t");

    Serial.print("Output Liquid Quantity 1: ");
    Serial.print(totalMilliLitres1);
    Serial.print("mL / ");
    Serial.print(totalMilliLitres1 / 1000);
    Serial.println("L");



    Serial.print("Flow rate 2: ");
    Serial.print(int(flowRate2));
    Serial.print("L/min");
    Serial.print("\t");

    Serial.print("Output Liquid Quantity 2: ");
    Serial.print(totalMilliLitres2);
    Serial.print("mL / ");
    Serial.print(totalMilliLitres2 / 1000);
    Serial.println("L");



    Serial.print("Flow rate 3: ");
    Serial.print(int(flowRate3));
    Serial.print("L/min");
    Serial.print("\t");

    Serial.print("Output Liquid Quantity 3: ");
    Serial.print(totalMilliLitres3);
    Serial.print("mL / ");
    Serial.print(totalMilliLitres1 / 1000);
    Serial.println("L");
  }
}


void checkNeedResetWiFi() {
  if (digitalRead(SWMU) == 0) {
    wifiReset();
  }
}
void wifiReset() {
  delay(2000);

  wifiManager.resetSettings();

  EEPROM.writeInt(ADDRESSWIFI, 259);
  EEPROM.commit();

  Serial.println("Reset Success");

  ESP.restart();

}
void wifiSetting() {

  if (!EEPROM.begin(1000)) {
    Serial.println("Failed to initialise EEPROM");
    Serial.println("Restarting...");
    delay(1000);
    ESP.restart();
  }



  pinMode(SWMU , INPUT);

  delay(3000);



  if (digitalRead(SWMU) == 0) {

    wifiReset();

  }



  WiFi.mode(WIFI_AP_STA);

  int statusWifi =   EEPROM.readInt(ADDRESSWIFI);

  delay(100);

  if (statusWifi == 259) {
    wifiManager.autoConnect("IoTWiFi" , "99887766");
    delay(1000);

  }
  WiFi.begin();
  delay(100);

  Serial.print("WiFi Connecting");

  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.print(".");
  }




  Serial.println("");
  Serial.println("WiFi connected");
  Serial.println("IP address: ");
  Serial.println(WiFi.localIP());

  EEPROM.writeInt(ADDRESSWIFI, 100);
  EEPROM.commit();




}
