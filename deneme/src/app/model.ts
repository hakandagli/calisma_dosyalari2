export class Model {
    user!:string;
    items!:TodoItem[];

    constructor(){
        this.user="Hakan";
        this.items=[
            new TodoItem("Spor",false),
            new TodoItem("Maç",true),
            new TodoItem("Fitness",false),
            new TodoItem("Fifa",true),

        ];
    }
}

export class TodoItem{
    description!:string;
    action!:boolean;
    constructor(description:string,action:boolean){
        this.description=description;
        this.action=action;
    }
}