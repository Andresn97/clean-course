(() => {

    function isRedFruit( fruit: string ): boolean {
        const redFruits = ['manzana', 'cereza', 'ciruela'];
        return redFruits.includes(fruit);
    }

    function getFruitsByColor( color: string ): string[] {

        if ( color === 'red' ) return ['manzana','fresa']; 
        
        if ( color === 'yellow') return ['piña','banana']; 
        
        if ( color === 'purple') return ['moras','uvas'];

        throw Error('the color must be: red, yellow, purple');
    }

    let isFirstStepWorking  = true;
    let isSecondStepWorking = true;
    let isThirdStepWorking  = true;
    let isFourthStepWorking = true;

    function workingSteps() {

        if( !isFirstStepWorking === true ) return 'First step broken.'; 
                
        if( !isSecondStepWorking === true ) return 'Second step broken.'; 

        if( !isThirdStepWorking === true ) return 'Third step broken.';

        if( !isFourthStepWorking === true ) return 'Fourth step broken.';

        return 'Working properly!';

    }


    // isRedFruit
    console.log({ isRedFruit: isRedFruit('cereza'), fruit: 'cereza' }); // true
    console.log({ isRedFruit: isRedFruit('piña'), fruit: 'piña' }); // true

    //getFruitsByColor
    console.log({ redFruits: getFruitsByColor('red') }); // ['manzana', 'fresa']
    console.log({ yellowFruits: getFruitsByColor('yellow') }); // ['piña', 'banana']
    console.log({ purpleFruits: getFruitsByColor('purple') }); // ['moras', 'uvas']
    // console.log({ pinkFruits: getFruitsByColor('pink') }); // Error: the color must be: red, yellow, purple

    // workingSteps
    console.log({ workingSteps: workingSteps() }); // Cambiar los valores de la línea 31 y esperar los resultados

})();




