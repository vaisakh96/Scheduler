import mainCtrl from './main.controller'

export default class interCtrl{
    constructor(){
        this.source = ['Hong Kong','Berlin','Canada','New Delhi','Singapore','Malayasia'];
        this.dest = ['Hong Kong','Berlin','Canada','New Delhi','Singapore','Malayasia'];
        this.num = 2;
    }
        
    public num : number;
    public FName : string;
    public id : number;
    public output : number;
    public SName : string;
    public DName : string;
    public Time : string
    public sourceSelected: string;
    public destSelected: string;
    public source : string[];
    public FTime : string;
    public dest:string[];

    private columns = [{
        id: 'id',
        label: 'ID',
        width: 200
    },
    {
        id: 'SName',
        label: 'Source',
        width: 200
    }, 
    {
        id: 'DName',
        label: 'Destination',
        width: 200
    }, 
    {
        id: 'FName',
        label: 'Flight Name',
        width: 200
    }, 
    {
        id: 'Time',
        label: 'Time',
        width: 200
    },
    {
        id: 'FTime',
        label: 'Time of Flight',
        width: 200
    },
    ];

    private rows = [{
        id: 1,
        FName: 'Everywhere Airlines',
        SName:'Berlin',
        DName:'Hong Kong',
        Time:'12:00',
        FTime:'8:30'
        },
    ];
            

    calculate(): void{
        
    }

    public dummy(): any{
        console.log('hello');
    }

    public addItem()
    {
        this.id=this.num++;
        // alert(this.id + ' ' + this.sourceSelected + ' ' + this.destSelected + ' ' + this.FName + ' ' + this.Time + ' ' + this.FTime);
        var newEle = { FName : this.FName,
        SName:this.sourceSelected,
        id:this.id,
        DName:this.destSelected,
        Time:this.Time,
        FTime:this.FTime};
        this.rows = this.rows.concat(newEle);

    }
} 