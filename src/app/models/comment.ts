export class Comment{
    constructor(
        public uid: string,
        public rating: number,        
        public date: string,
        public comment?: string
    ){}
}