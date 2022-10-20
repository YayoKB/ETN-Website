// url_data.js
//

class URLData {

    constructor() {
        this.data = "";
        this.position = 0;
    }
}

function read_parameter(urlData, isLast)
{
    let output = [];
    output[0] = "";
    output[1] = "";

    urlData.position++;
    let c = urlData.data[urlData.position];

    while(c != '=')
    {
        output[0] += c;
        
        urlData.position++;
        c = urlData.data[urlData.position];
    }

    urlData.position++;
    c = urlData.data[urlData.position];

    if(!isLast)
    {
        while(c != '&')
        {
            output[1] += c;

            urlData.position++;
            c = urlData.data[urlData.position];
        }
    }
    else
    {
        while(urlData.position < urlData.data.length)
        {
            output[1] += c;
            
            urlData.position++;

            if(urlData.position < urlData.data.length)
            {
                c = urlData.data[urlData.position];
            }
        }
    }

    return output;
}

function write_parameter(urlData, parameter, isFirst)
{
    if(isFirst)
    {
        urlData.data += "?";
        urlData.data += parameter[0];
        urlData.data += "=";
        urlData.data += parameter[1];
    }
    else
    {
        urlData.data += "&";
        urlData.data += parameter[0];
        urlData.data += "=";
        urlData.data += parameter[1];
    }
}

function encode(text)
{
    return text.replaceAll(" ", "+");
}

function decode(text)
{
    return text.replaceAll("+", " ");
}

function url_contains_data(url)
{
    return url.includes("?");
}