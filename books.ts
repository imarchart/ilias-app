import v5 from 'uuid';



export class Book {

    

    constructor(title: string, author: string, id?: string) {

        this.title = title;

        this.author = author;

 

        if (id) {

            this._id = id;

        }

        else {

            this._id = v5();

        }

    }

  

    private _id : string;

    public get id() : string {

        return this._id;

    }



    private _title : string;

    public get title() : string {

        return this._title;

    }

    public set title(v : string) {

        this._title = v;

    }



    

    private _author : string;

    public get author() : string {

        return this._author;

    }

    public set author(v : string) {

        this._author = v;

    }

         

}