document.querySelector('button').addEventListener('click', async () => {

    let text = document.querySelector('input').value;

    let resp = await fetch('/text', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ text: text })
    })

    let msg = await resp.json();
    document.querySelector('p').innerText = msg.msg;

})