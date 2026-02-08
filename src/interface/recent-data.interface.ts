interface BaseRecentData{
  id: string;
  name: string;
  age: number;
  gender: 'M' | 'F' | 'O';
  status: string;
  time: string;
}


export interface RecentRegistration extends BaseRecentData {

}

export interface RecentScreening extends BaseRecentData {

}