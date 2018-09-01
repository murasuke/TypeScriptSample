export namespace App{
    export class Talk{
        public static GetGreeting( now: Date ): string{
            // return "Hello!";
            if( now.getHours() < 12){
                return "Hello!";
            }else{
                return "Good evening!";
            }
        }
    }
}
