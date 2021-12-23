import Formular from "./forms/Formular";

function Result(){

    function addFormHandler(allData) {
        fetch(
            'https://formular-8b006-default-rtdb.europe-west1.firebasedatabase.app/Nehnutelnosti.json',
            {
                method: 'POST',
                body: JSON.stringify(allData),
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        );
    }

    return <Formular  onAddForm={addFormHandler} />        
}

export default Result;