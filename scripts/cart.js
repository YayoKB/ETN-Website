// cart.js
//

function cartToURLData(cart)
{
    let output = "";
    let index = 0;

    for(index = 0; index < (cart.length - 1); index++)
    {
        output += cart[index] + ",";
    }

    output += cart[cart.length - 1];

    return output;
}

function update_link_with_cart(element, cart)
{
    let href = element.getAttribute("href");

    if(href.includes("?"))
    {
        let pageURL = href.substring(0, href.indexOf("?"));
        href = pageURL + "?cart=" + cart;
    }
    else
    {
        href += "?cart=" + cart;
    }

    element.setAttribute("href", href);
}