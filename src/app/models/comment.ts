export class Comment{
    constructor(
        public displayName: string,
        public rating: number,        
        public date: string,        
        public comment?: string
    ){}
}