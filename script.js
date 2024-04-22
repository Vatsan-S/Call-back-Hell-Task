let div = document.createElement("h1");
setTimeout(()=>{
    div.innerText = "10";
    setTimeout(()=>{
        div.innerText = "9";
        setTimeout(()=>{
            div.innerText = "8";
            setTimeout(()=>{
                div.innerText="7";
                setTimeout(()=>{
                    div.innerText="6";
                    setTimeout(()=>{
                        div.innerText="5";
                        setTimeout(()=>{
                            div.innerText="4";
                            setTimeout(()=>{
                                div.innerText="3";
                                setTimeout(()=>{
                                    div.innerText="2";
                                    setTimeout(()=>{
                                        div.innerText="1";
                                        setTimeout(()=>{
                                            document.body.classList.add("bg")
                                            div.innerText="Happy Independance Day"
                                        },1000)
                                    },1000)
                                },1000)
                            },1000)
                        },1000)
                    },1000)
                },1000)
            },1000)
        },1000)
    },1000)
},1000)
document.body.append(div);