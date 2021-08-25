class PinStatusValve  {


  public: PinStatusValve(int ols, int cls){
      _ols = ols;
      _cls = cls;
  }

    public: int getCLS(){

        return _cls;
  }


    public: int getOLS(){

        return _ols;
  }


 public : int _ols;
   public : int _cls;
};