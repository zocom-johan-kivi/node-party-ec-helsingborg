# Node-övningar

## API Spara skämt (HTTP, FS)
Du ska bygga ett API där man kan spara och hämta skämt.

Ditt API ska ha följande funktionalitet:

|endpoint|metod|desc
|---|---|---|
|**/jokes**|GET| Returnerar en array med samtliga skämt.
|**/jokes**|POST| Skicka in jokes i följande format ```{ joke : <String> }```.
|**/random**|GET| Returnerar ett slumpat skämt från dina sparade.

Det räcker med att du sparar dina skämt i en array i Node, men vill du göra det mer avancerat; spara dem i en txt-fil.


## Rövarspråket Webbapp (HTTP, HTML, CSS, FETCH)
Du ska göra en webbapp som kan konvertera vanlig text till [rövarspråket](https://sv.wikipedia.org/wiki/Rövarspråket).
Din app består av två delar; En *frontend* och en *backend* ( API ).

#### Frontend
Din frontend ska bestå av en snyggt formaterad ```index.html``` som kan göra ```GET``` och ```POST``` requests med hjälp av fetch API:et. Ditt gränssnitt ska ha minst ha en *textarea* och en *button*. Det är viktigt att din .html-fil innehåller alla resurser, både HTML, CSS och JS.


Förslag på GUI hittar du [här](https://www.figma.com/file/vjly6mDgb7EjrvKE3dZQ5o/R%C3%B6varspr%C3%A5ket-UI?node-id=1%3A2).

#### Backend
Gör ett API med följande *endpoints* och *metoder*.

|endpoint|metod|desc
|---|---|---|
|**/**|GET| Servar ```./index.html```. HTML måste innehålla all kod ( HTML, CSS & JS).
|**/text** | POST | Tar emot en sträng och konverterar den till *rövarspråket* och returnerar.

Försök att jobba med *moduler* och *asynkrona funktioner* på node-sidan.