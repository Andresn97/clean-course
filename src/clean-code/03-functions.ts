interface Movie {
    cast: string[]; 
    description: string;
    rating: number; 
    title: string; 
}

(() => {

    function getMovieById( movieId: number ) {
        console.log({ movieId });
    }

    function getMovieCastById( movieId: number ) {
        console.log({ movieId });
    }

    function getActorBioById( actorId: number ) {
        console.log({ actorId });
    }
    
    function createMovie( { title, description, rating, cast }: Movie ): void {
        console.log({ title, description, rating, cast });
    }

    function createActor( fullName: string, birthDate: Date ): boolean {
        
        // tarea asincrona para verificar nombre
        // ..
        // .. 
        if ( fullName === 'fernando' ) return false;

        console.log('Crear actor', birthDate);
        return true;        

    }

    const getPayAmount = ({ isDead = false, isSeparated = true, isRetired = false }): number => {

        if (isDead) return 1500;

        if (isSeparated) return 2500;
        
        return isRetired ? 3000 : 4000;
    
    }

})();




