class Calculator {
    constructor () {
        this.typed_numbers = "";
        this.grouped_numbers = [];
        this.current_operotor = '=';
    }

    printff ( name ) {
        if ( name.length > 10 ) {
            document.getElementById("calc_screen").innerHTML = name.slice( name.length - 10, name.length );
            console.log( "answer is " + name );
        }
        else 
            document.getElementById("calc_screen").innerHTML = name;
    } 

    insert_number ( name ) {
        this.typed_numbers += name;
        this.printff( this.typed_numbers );
    }

    insert_operator ( name ) {
        let ans;
        if ( this.typed_numbers.length > 12 ) {
            this.clear();
            window.alert(" value is too large ");
        }
        else if ( this.typed_numbers.length > 0 ) {
            this.grouped_numbers.push( Number.parseFloat(this.typed_numbers) );
            this.typed_numbers = "";

            if ( this.grouped_numbers.length >= 2 ) {
                switch ( this.current_operotor ) {
                    case '+':
                        ans = this.grouped_numbers[0] + this.grouped_numbers[1];
                        break;
                    case '-':
                        ans = this.grouped_numbers[0] - this.grouped_numbers[1];
                        break;
                    case '*':
                        ans = this.grouped_numbers[0] * this.grouped_numbers[1];
                        break;
                    case '/':
                        ans = this.grouped_numbers[0] / this.grouped_numbers[1];
                        break;
                    default:
                        ans = this.grouped_numbers[1];
                        break;
                }
                this.grouped_numbers = [];
                this.grouped_numbers.push( ans );
                this.printff( "" + ans );
            }
        }   

        this.current_operotor = name;
    }

    clear () {
        this.grouped_numbers = [];
        this.typed_numbers = "";
        this.current_operotor = '=';
        this.printff("");
    }
}

let calc = new Calculator();
