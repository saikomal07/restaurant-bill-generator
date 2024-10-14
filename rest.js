function scrollToSection(sectionId) {
    var section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth', block: 'end' });
    }
}

function rowin(button)
{
    let p1=button.parentNode;
    let p2=p1.parentNode;
    let items=p2.querySelectorAll('h5');
    var name=items[0].innerText;
    var rate=parseFloat(items[1].innerText,'');
    let table1=document.getElementById('table');
    let c=table1.tBodies[0].rows.length;
    let total=document.querySelector('#total');
    if(c===0)
    {
        let newr=table1.tBodies[0].insertRow(c);
        c++;
        let c1=newr.insertCell(0);
        let c2=newr.insertCell(1);
        let c3=newr.insertCell(2);
        c1.innerText=name; 
        c2.innerText=1;
        c3.innerText=rate;
        total.innerText=rate;
    }
    else
    {
        let flag=true;
        for(let i=0; i<c;i++)
        {
            let rownu=table1.rows[i+1];
            let k=rownu.querySelectorAll('td');
            let n1=k[0].innerText;
            if(name===n1)
            {
                let n2=parseInt(k[1].innerText);
                n2+=1;
                k[1].innerText=n2;
                let n3=parseInt(k[2].innerText);
                total.innerText=parseInt(total.innerText)+rate;
                n3+=rate;
                k[2].innerText=n3;
                flag=false;
            }
        }
        if(flag)
        {
            let newr=table1.tBodies[0].insertRow(c);
            c++;
            let c1=newr.insertCell(0);
            let c2=newr.insertCell(1);
            let c3=newr.insertCell(2);
            c1.innerText=name;
            c2.innerText=1;
            c3.innerText=rate;
            total.innerText=parseInt(c3.innerText)+parseInt(total.innerText);
        }
    }
}

function popup()
{
    let bill=document.querySelector('#total').innerText;
    alert("The total amount to be paid is : "+`${bill}`);
    window.print(bill);
    alert(" Thank You .......Visit again :)");
    location.reload();
}

function rowout(button)
{
    let r1=button.parentNode;
    let r2=r1.parentNode;
    let items=r2.querySelectorAll('h5');
    var name=items[0].innerText;
    var rate=parseFloat(items[1].innerText,'');
    table=document.getElementById('table');
    c=table.tBodies[0].rows.length;
    let total=document.querySelector('#total');
    if(c>0)
    {
        for(let j=0;j<c;j++)
        {
            let rownu=table.rows[j+1];
            let ele=rownu.querySelectorAll('td');
            let n1=ele[0].innerText;
            if(n1===name)
            {
                ele[1].innerText=parseInt(ele[1].innerText)-1;
                ele[2].innerText=parseInt(ele[2].innerText)-rate;
                total.innerText=parseInt(total.innerText)-rate;
                if(ele[1].innerText==='0')
                {
                    table.deleteRow(j+1);
                }
            }
        }
    }
}