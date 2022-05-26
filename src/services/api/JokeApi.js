export async function fetchData(stringToFind = "", categoryToFind = "") {
    let url = 'https://v2.jokeapi.dev/joke/'
    if (categoryToFind != "" && categoryToFind != "undefined") {
        url += categoryToFind + '?'
    } else {
        url += "Any?"
    }
    if (stringToFind != "" && categoryToFind != "undefined") {
        url += "contains=" + stringToFind + '&'
    }
    url += 'amount=10'
    console.log(url)
    const reponse = await fetch(url)
    const data = await reponse.json()
    console.log(reponse)
    return data
}