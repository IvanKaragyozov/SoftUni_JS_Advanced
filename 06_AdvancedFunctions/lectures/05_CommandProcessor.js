function createProcessor(){
    let state = '';

    function append(str){
        state += str;
    }

    function removeStart(n){
        state = state.slice(n);
    }

    function removeEnd(n){
        state = state.slice(0, -n);
    }

    function print(){
        console.log(state);
    }

    return {
        append,
        removeStart,
        removeEnd,
        print
    };
}

const processor = createProcessor();

processor.append('hello');
processor.removeStart('again');
processor.removeEnd(3);
processor.print();