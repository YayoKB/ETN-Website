// download.js
//

const COURSE_ID_FIRST_AID = 1;
const COURSE_ID_SEWING = 2;
const COURSE_ID_LANDSCAPING = 3;
const COURSE_ID_LIFE_SKILLS = 4;
const COURSE_ID_CHILD_MINDING = 5;
const COURSE_ID_COOKING = 6;
const COURSE_ID_GARDEN_MAINTENANCE = 7;

class InvoiceDocument
{
    constructor()
    {
        this.firstName = "";
        this.lastName = "";
        this.streetAddress = "";
        this.suburb = "";
        this.city = "";
        this.zipCode = "";
        this.courses = [];
        this.subtotal = 0;
        this.discountPrice = 0;
        this.vatPrice = 0;
        this.totalAmount = 0;
    }
}

function downloadInvoice(invoiceDocument)
{
    const pdf = new jsPDF("p", "pt");

    const PAGE_WIDTH = 595;

    pdf.setFont("Arial");
    pdf.setFontType("bold");
    pdf.setFontSize(50);

    pdf.text(32, 64, "INVOICE");

    pdf.setFontSize(16);
    pdf.text(32, 96, "INVOICE NUMBER");

    pdf.setFontType("normal");
    const invoiceNumber = generateInvoiceNumber();
    pdf.text(32, 118, invoiceNumber);

    pdf.setFontType("bold");
    pdf.text(32, 136, "DATE OF ISSUE");
    pdf.setFontType("normal");
    pdf.text(32, 154, new Date(Date.now()).toLocaleDateString());

    pdf.addImage("data:image/png;base64," + LOGO_BASE64, "png", (PAGE_WIDTH - 152), 40, 120, 120);

    // new section

    pdf.setFontType("bold");
    pdf.text(32, 218, "BILLED TO");
    pdf.setFontType("normal");
    pdf.setFontSize(12);
    
    pdf.text(32, 236, invoiceDocument.firstName + " " + invoiceDocument.lastName);
    pdf.text(32, 252, invoiceDocument.streetAddress);
    pdf.text(32, 268, invoiceDocument.suburb + ", " + invoiceDocument.city);
    pdf.text(32, 284, invoiceDocument.zipCode);

    pdf.setFontType("bold");
    pdf.setFontSize(16);
    pdf.text(PAGE_WIDTH - 290, 196, "Empowering the Nation");

    pdf.setFontType("normal");
    pdf.setFontSize(12);
    pdf.text(PAGE_WIDTH - 290, 214, "63 Roberts Avenue");
    pdf.text(PAGE_WIDTH - 290, 228, "Kensington, JHB 2101");
    pdf.text(PAGE_WIDTH - 290, 242, "021 713 4983");
    pdf.text(PAGE_WIDTH - 290, 256, "contact@etn.co.za");
    pdf.text(PAGE_WIDTH - 290, 270, "etn.co.za");

    // new section

    pdf.setFontSize(16);
    pdf.text(44, 330, "DESCRIPTION");
    pdf.text(316, 330, "QUANTITY");
    pdf.text(432, 330, "AMOUNT");
    pdf.setFontSize(12);
    pdf.setLineWidth(3);
    pdf.line(32, 338, (PAGE_WIDTH - 64), 338);
    pdf.setLineWidth(1);

    let index = 0;
    for(index = 0; index < invoiceDocument.courses.length; index++)
    {
        switch(invoiceDocument.courses[index])
        {
            case COURSE_ID_FIRST_AID:
                pdf.text(44, 360 + (28 * index), "First Aid - 6-Month Course");
                pdf.text(316, 360 + (28 * index), "1");
                pdf.text(432, 360 + (28 * index), "R1500.00");
                pdf.line(32, (360 + (28 * index)) + 8, (PAGE_WIDTH - 64), (360 + (28 * index)) + 8);
            break;

            case COURSE_ID_SEWING:
                pdf.text(44, 360 + (28 * index), "Sewing - 6-Month Course");
                pdf.text(316, 360 + (28 * index), "1");
                pdf.text(432, 360 + (28 * index), "R1500.00");
                pdf.line(32, (360 + (28 * index)) + 8, (PAGE_WIDTH - 64), (360 + (28 * index)) + 8);
            break;

            case COURSE_ID_LANDSCAPING:
                pdf.text(44, 360 + (28 * index), "Landscaping - 6-Month Course");
                pdf.text(316, 360 + (28 * index), "1");
                pdf.text(432, 360 + (28 * index), "R1500.00");
                pdf.line(32, (360 + (28 * index)) + 8, (PAGE_WIDTH - 64), (360 + (28 * index)) + 8);
            break;

            case COURSE_ID_LIFE_SKILLS:
                pdf.text(44, 360 + (28 * index), "Life Skills - 6-Month Course");
                pdf.text(316, 360 + (28 * index), "1");
                pdf.text(432, 360 + (28 * index), "R1500.00");
                pdf.line(32, (360 + (28 * index)) + 8, (PAGE_WIDTH - 64), (360 + (28 * index)) + 8);
            break;

            case COURSE_ID_CHILD_MINDING:
                pdf.text(44, 360 + (28 * index), "Child Minding - 6-Month Course");
                pdf.text(316, 360 + (28 * index), "1");
                pdf.text(432, 360 + (28 * index), "R750.00");
                pdf.line(32, (360 + (28 * index)) + 8, (PAGE_WIDTH - 64), (360 + (28 * index)) + 8);
            break;

            case COURSE_ID_COOKING:
                pdf.text(44, 360 + (28 * index), "Cooking - 6-Month Course");
                pdf.text(316, 360 + (28 * index), "1");
                pdf.text(432, 360 + (28 * index), "R750.00");
                pdf.line(32, (360 + (28 * index)) + 8, (PAGE_WIDTH - 64), (360 + (28 * index)) + 8);
            break;

            case COURSE_ID_GARDEN_MAINTENANCE:
                pdf.text(44, 360 + (28 * index), "Garden Maintenance - 6-Month Course");
                pdf.text(316, 360 + (28 * index), "1");
                pdf.text(432, 360 + (28 * index), "R750.00");
                pdf.line(32, (360 + (28 * index)) + 8, (PAGE_WIDTH - 64), (360 + (28 * index)) + 8);
            break;
        }
    }

    // new section

    const position = 338 + (invoiceDocument.courses.length * 30) + 36;

    pdf.setFontType("bold");
    pdf.text(32, position, "PAYMENT DETAILS:");

    pdf.setFontType("normal");
    pdf.text(32, position + 16, "Send proof of payment to payment@etn.co.za");
    pdf.text(32, position + 32, "Payment required before booking is finalised.");

    pdf.setFontType("bold");
    pdf.text(32, position + 96, "BANK DETAILS:");

    pdf.setFontType("normal");
    pdf.text(32, position + 112, "Empowering the Nation");
    pdf.text(32, position + 128, "Bank name: Capitec");
    pdf.text(32, position + 144, "Branch code: 470010");
    pdf.text(32, position + 160, "Acc. number: 1234567890");
    pdf.text(32, position + 176, "Acc. type: Cheque");
    pdf.text(32, position + 192, "Ref. number: " + invoiceDocument.firstName[0] + invoiceDocument.lastName[0] + invoiceNumber);
    
    pdf.setFontType("bold");
    pdf.text((PAGE_WIDTH - 260), position + 122, "SUBTOTAL");
    pdf.text((PAGE_WIDTH - 260), position + 138, "LESS DISCOUNT");
    pdf.text((PAGE_WIDTH - 260), position + 154, "VAT RATE");
    pdf.text((PAGE_WIDTH - 260), position + 170, "VAT");
    pdf.text((PAGE_WIDTH - 260), position + 186, "TOTAL");

    pdf.setFontType("normal");
    pdf.text((PAGE_WIDTH - 140), position + 122, "R" + roundOff(invoiceDocument.subtotal));
    pdf.text((PAGE_WIDTH - 140), position + 138, "(R" + roundOff(invoiceDocument.discountPrice) + ")");
    pdf.text((PAGE_WIDTH - 140), position + 154, "15%");
    pdf.text((PAGE_WIDTH - 140), position + 170, "R" + roundOff(invoiceDocument.vatPrice));
    pdf.text((PAGE_WIDTH - 140), position + 186, "R" + roundOff(invoiceDocument.totalAmount));

    pdf.save("invoice.pdf");
}

function generateInvoiceNumber()
{
    let output = "";

    let k = 0;
    for(k = 0; k < 5; k++)
    {
        output += parseInt(Math.random() * 9);
    }

    return output;
}

function roundOff(value)
{
    return Math.round(value * 100) / 100;
}