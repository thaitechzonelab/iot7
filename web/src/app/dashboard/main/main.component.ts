import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { IMqttMessage, MqttService } from 'ngx-mqtt';
import { Subscription } from 'rxjs';
declare const $: any;
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
  @ViewChild('diagramMain')
  myCanvas: ElementRef<HTMLCanvasElement>;


  @ViewChild('disc')
  discs: ElementRef<HTMLElement>


  lat: number = 13.811341 ;
  lng: number = 100.341770;


  public context: CanvasRenderingContext2D;
  myValueProperty = 10

  imgValveOpen: any
  imgValveClose: any
  diagram: any

  canvasW: any;
  canvasH: any;


  stateValveAutoPriority = "";
  stateValveAutoName = "";
  startTime = "";
  delaysTime = "";
  remainingTime = ""


  imgValve1 = "../../../assets/images/valve_close.png"
  imgValve2 = "../../../assets/images/valve_close.png"
  imgValve3 = "../../../assets/images/valve_close.png"
  imgValve4 = "../../../assets/images/valve_close.png"
  imgValve5 = "../../../assets/images/valve_close.png"

  statusValve1 = "Close"
  statusValve2 = "Close"
  statusValve3 = "Close"
  statusValve4 = "Close"
  statusValve5 = "Close"

  valveStatus = [
    0, 0, 0, 0, 0
  ]

  valvePosition = [

    {

      "name": "v1",
      "x": 410,
      "y": 346.713,
      "w": 53.212,
      "h": 53.213
    },
    {
      "name": "v2",
      "x": 407.255,
      "y": 573.745,
      "w": 53.212,
      "h": 53.213
    },
    {
      "name": "v3",
      "x": 509.871,
      "y": 348.933,
      "w": 53.212,
      "h": 53.213
    },
    {
      "name": "v4",
      "x": 510.219,
      "y": 573.58,
      "w": 53.212,
      "h": 53.213
    },
    {
      "name": "v5",
      "x": 586.17,
      "y": 574.11,
      "w": 53.212,
      "h": 53.213
    }

  ]

  



  dataSensor = {};

  private url : string = "http://178.128.221.52:6432";

  // private strAutoBTN = "ยกเลิกทำงานแบบ Auto";
  public statusAutoBTN = 1;
  public strAutoBTN = "ทำงานแบบ Auto";

  public message: string;
  // private subscription: Subscription;
  state = false;
  private subscription: Subscription;
  constructor(private _mqttService: MqttService, private http: HttpClient) {


    this._mqttService.observe("status/sensor/iot").subscribe((message: IMqttMessage) => this.dataSensorJSON(message));


    this.subscription = this._mqttService.observe("status/valve/display").subscribe((message: IMqttMessage) => this.statusValve(message));

    this._mqttService.observe("status/valve/auto/detail").subscribe((message: IMqttMessage) => this.updateStateValveAuto(message));




    setInterval( ()=>{
      console.log("isAutoValve");
    
      this.http.get(this.url+"/is-auto").subscribe((data)=>{
  


        console.log(JSON.stringify(data));

        if(data["status"] == 0){
          this.strAutoBTN = "ทำงานแบบ Auto";
          this.statusAutoBTN = 1;
        }else{
          this.strAutoBTN = "ยกเลิกทำงานทำงานแบบ Auto";
          this.statusAutoBTN = 0;
        }
      })
    }, 1000);


  }

  autoValve() {
    console.log("autoValve");
    
    this.http.get(this.url+"/queue").subscribe((data)=>{

    })
  }
  


  stopValveManual(){
    this.http.get(this.url+"/stop-valve").subscribe((data)=>{

    })
  }


  flushA(){
    this.http.get(this.url+"/flush-a").subscribe((data)=>{

    })
  }

  flushB(){
    this.http.get(this.url+"/flush-b").subscribe((data)=>{

    })
  }



  backwashA(){
    this.http.get(this.url+"/backwash-a").subscribe((data)=>{

    })
  }

  backwashB(){
    this.http.get(this.url+"/backwash-b").subscribe((data)=>{

    })
  }

  filter(){
    this.http.get(this.url+"/filter").subscribe((data)=>{

    })
  }


  stopAutoValve() {
    console.log("stopAutoValve");
    
    this.http.get(this.url+"/stop").subscribe((data)=>{

    })


    this.stateValveAutoPriority = "";
    this.stateValveAutoName = "";
    this.startTime = "";
    this.delaysTime = "";
    this.remainingTime = ""
  }


  dataSensorJSON(message) {
    var json = JSON.parse(message.payload.toString());

    this.dataSensor = json;
    
    console.log(JSON.stringify(json));

  }
  updateStateValveAuto(message) {
    var json = JSON.parse(message.payload.toString());


    this.stateValveAutoPriority = json["priority"]
    this.stateValveAutoName = json["name"]
    this.startTime = json["start"]
    this.remainingTime = json["remainingTime"] + " วินาที"
    this.delaysTime = json["delays"];

    console.log(json)

    var vr = "../../../assets/images/valve_close.png"
    var vg = "../../../assets/images/valve_open.png"

    if (json["status"]["v1"] == 1) {

      this.imgValve1 = vg;
      this.statusValve1 = "Open";

    } else {
      this.imgValve1 = vr;
      this.statusValve1 = "Close";
    }

    if (json["status"]["v2"] == 1) {

      this.imgValve2 = vg;
      this.statusValve2 = "Open";

    } else {
      this.imgValve2 = vr;
      this.statusValve2 = "Close";
    }

    if (json["status"]["v3"] == 1) {

      this.imgValve3 = vg;
      this.statusValve3 = "Open";

    } else {
      this.imgValve3 = vr;
      this.statusValve3 = "Close";
    }

    if (json["status"]["v4"] == 1) {

      this.imgValve4 = vg;
      this.statusValve4 = "Open";

    } else {
      this.imgValve4 = vr;
      this.statusValve4 = "Close";
    }


    if (json["status"]["v5"] == 1) {

      this.imgValve5 = vg;
      this.statusValve5 = "Open";

    } else {
      this.imgValve5 = vr;
      this.statusValve5 = "Close";
    }



  }

  statusValve(message) {

    this.message = message.payload.toString();
    var json = JSON.parse(this.message);

    var v1 = json["v1"];
    var v2 = json["v2"];
    var v3 = json["v3"];
    var v4 = json["v4"];
    var v5 = json["v5"];


    if (v1 != this.valveStatus[0]) {
      this.sendStatusValve(0)

    }

    if (v2 != this.valveStatus[1]) {
      this.sendStatusValve(1)

    }


    if (v3 != this.valveStatus[2]) {
      this.sendStatusValve(2)

    }


    if (v4 != this.valveStatus[3]) {
      this.sendStatusValve(3)

    }


    if (v5 != this.valveStatus[4]) {
      this.sendStatusValve(4)

    }

  }



  getMax(n1, n2) {
    if (n1 >= n2) {
      return n1;
    } else {
      return n2;
    }
  }
  getMin(n1, n2) {
    if (n1 <= n2) {
      return n1;
    } else {
      return n2;
    }
  }


  ngAfterViewInit(): void {

    this.imgValveOpen = new Image();
    this.imgValveOpen.src = "../assets/images/valve_open.png";

    this.imgValveClose = new Image();
    this.imgValveClose.src = "../assets/images/valve_close.png";



    this.context = this.myCanvas.nativeElement.getContext('2d');


    this.diagram = new Image();
    this.diagram.src = "../assets/images/Untitled-1-01.png";

    this.diagram.onload = () => {


      var w = this.discs.nativeElement.offsetWidth
      var h = (window.innerHeight)

      var n1 = this.getMax(this.getMax(this.diagram.width, this.diagram.height), this.getMax(w, h));
      var n2 = this.getMin(this.getMax(this.diagram.width, this.diagram.height), this.getMax(w, h));

      var ratioW = (n1) / (n2);

      var n3 = this.getMax(
        this.getMin(this.diagram.width, this.diagram.height),
        this.getMin(w, h));
      var n4 = this.getMin(
        this.getMin(this.diagram.width, this.diagram.height),
        this.getMin(w, h));

      var ratioH = (n3) / (n4);

      var imageScale = this.getMax(ratioW, ratioH);

      this.canvasW = this.diagram.width / imageScale;
      this.canvasH = this.diagram.height / imageScale;


      this.myCanvas.nativeElement.width = this.canvasW
      this.myCanvas.nativeElement.height = this.canvasH


      this.context.drawImage(this.diagram, 0, 0, this.canvasW, this.canvasH);

      this.myCanvas.nativeElement.addEventListener("mousedown", (ev) => {

        var pos = {
          x: (ev.clientX - this.myCanvas.nativeElement.offsetLeft),
          y: (ev.clientY - this.myCanvas.nativeElement.offsetTop)
        }

        console.log(pos);



        var ratioW = this.diagram.width / this.canvasW;
        var ratioH = this.diagram.height / this.canvasH;


        for (var i = 0; i < Object.keys(this.valvePosition).length; i++) {

          var checkXStart = this.valvePosition[i]["x"] / ratioW;
          var checkYStart = this.valvePosition[i]["y"] / ratioH;

          var checkXEnd = checkXStart + (this.valvePosition[i]["w"] / ratioW);
          var checkYEnd = checkYStart + (this.valvePosition[i]["h"] / ratioH);

          if (pos.x >= checkXStart && pos.x <= checkXEnd && pos.y >= checkYStart && pos.y <= checkYEnd) {
            // this.mqttValve(i+1);

            console.log(this.valvePosition[i]["name"]);

          }

        }



      })


    };
  }

  sendStatusValve(valve) {

    var img = this.imgValveClose;

    if (this.valveStatus[valve] == 0) {
      img = this.imgValveOpen;
      this.valveStatus[valve] = 1;
    } else {
      this.valveStatus[valve] = 0;
    }

    var x = (this.valvePosition[valve].x / (this.diagram.width / this.canvasW));
    var y = (this.valvePosition[valve].y / (this.diagram.height / this.canvasH));

    var w = (this.valvePosition[valve].w / (this.diagram.width / this.canvasW));
    var h = (this.valvePosition[valve].h / (this.diagram.height / this.canvasH));


    this.context.drawImage(img, x, y, w, h);
  }


  // mqttValve(valve){


  //   var status = {
  //     "valve" :  valve
  //   }

  //   console.log(JSON.stringify(status));

  //   this._mqttService.unsafePublish("status/valve" , JSON.stringify(status));

  // }


}
