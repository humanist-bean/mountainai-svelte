/* wiki.js
Description: Contains functions for searching for mountain prediction results
with wikipedia API and returning the relevant data 

Source: https://femkreations.com/how-to-build-a-wikipedia-search-app-in-9-steps/
*/

// Description: takes a mountain name e.g. 'mt hood' and returns the
// wikipedia info we want: mountain image URL, summary, and title
// from wikipedia with wikipedia API 
export async function getWikiInfoFromName(name){
    // Step 1. Get top wikipedia search result given mountain name
    // should be the actual mountain's page, but potentially not always
    const wikiApiSearchUrl = `https://en.wikipedia.org/w/api.php?action=query&list=search&prop=info&
    inprop=url&utf8=&format=json&origin=*&srlimit=20&srsearch=${name}`;
    let topResult;

    try{
        const response = await fetch(wikiApiSearchUrl);
        const data = await response.json();
        const resultsArray = data.query.search;
        topResult =  resultsArray[0];
        console.log("Retrieved top prediction result from wikipedia successfully:");
    } catch(e){
        console.log('An error occurred in 1:', e);
    }
    console.log(topResult);

    // Step 2. Retrieve top result wiki page content using topResult.title obtained in step 1
    const topTitle = await topResult.title;
    const topPageApiUrl = encodeURI(`https://en.wikipedia.org/w/api.php?action=parse&origin=*&format=json&page=${topTitle}`);
    let topHtml;
    try{
        const response = await fetch(topPageApiUrl);
        console.log(response);
        const json = await response.json();
        topHtml = await json.parse.text["*"];
        console.log("Retrieved top page html from wikipedia api successfully:");
    } catch(e){
        console.log('An error occurred in 2:', e);
    }
    //console.log(topHtml);

    // Step 3. Extract (Top) description, elevation, and main image URL
    // from wiki page html retrieved in step 2
    const htmlContent = await topHtml;
    //let mainImageUrl, extractedText;
    const { mainImageUrl, extractedText } = await extractMtnInfo(htmlContent);
    return new Promise((resolve, reject) =>{
        try{
            resolve({ mainImageUrl, extractedText, topTitle });
        } catch(e){
            console.log('An error occurred in 3:', e);
            reject(e);
        }
    });

}

// Description: helper function that extracts the relevant mountain info
// given the htmlContent (string of the html).
// Returns: mainImageUrl, extractedText
async function extractMtnInfo(htmlContent) {
    return new Promise((resolve, reject) => {
        try{
            // Assuming you have retrieved the HTML content of the Wikipedia page and stored it in a variable 'htmlContent'
            // Step A: Create a DOM Element
            const tempElement = document.createElement('div');
            tempElement.innerHTML = htmlContent;

            // Step B: Locate the Summary Box
            const summaryBox = tempElement.querySelector('.infobox');

            // Step C: Extract '(Top)' Description
            //const topDescriptionElement = summaryBox.querySelector('.description');
            //const topDescription = topDescriptionElement.textContent;
            //Find all <p> elements and the <h2> element
            const paragraphs = tempElement.querySelectorAll('p');
            const h2Element = tempElement.querySelector('h2');

            // Step D: Extract text from the first <p> elements until the <h2> element is encountered
            let extractedText = '';
            for (const paragraph of paragraphs) {
            if (paragraph === h2Element) {
                break; // Stop extracting text when the <h2> element is encountered
            }

            // Append the paragraph's text content to the extractedText
            extractedText += paragraph.textContent.trim() + ' ';
            }

            // Trim the final extractedText to remove any leading/trailing whitespace
            extractedText = extractedText.trim();

            // Example usage: Log the extracted text
            //console.log(extractedText);

            // Step E: Extract Main Image URL
            const mainImageElement = summaryBox.querySelector('img');
            const mainImageUrl = mainImageElement.getAttribute('src');


            console.log('Main Image URL:', mainImageUrl);
            console.log('Extracted Text is: ', extractedText);

            console.log("Successfully extracted relevant mountain information from wikipedia!");
            resolve({ mainImageUrl, extractedText });

        } catch(e){
            console.log('An error occurred in 3:', e);
            reject(Error("The following error occured retrieving this image's \
             wikipedia data. Try again with another mountain image! Error: " + e)); //reject(e);
        }
    });
}
