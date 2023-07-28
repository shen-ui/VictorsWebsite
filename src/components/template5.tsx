import "../styles/template5.scss"
import Icon from "../assets/banner.png"

function Template5(){
/*
TODO: Fix message box resizing.
let textarea = document.getElementById("form-input") || null;
let heightLimit = 200;

function handleChange(){
    if(textarea != null){
        console.log(textarea.style.height = "");
    }
    //textarea[0].style.height = Math.min(textarea[0].scrollHeight, heightLimit) + "px";
} 
*/
    return (
        <div className="template5">
            <div className="container">
                <img className="contact-icon" alt="banner" src={Icon}/>
                <form className="contact-form" method="post" action="mailto:peterhuiwang1995@gmail.com">
                    <div className="first-layer">
                        <input className="form-name" placeholder="Name" id="input" type="text"/>
                        <input className="form-email" id="input" placeholder="E-Mail" type="text"/>
                    </div>
                    <textarea className="form-text" id="form-input"/>
                    <input className="form-submit" type="submit" value="SEND"></input>
                </form>
            </div>
        </div>
    )
}

export default Template5;