import React, {useEffect, useState} from 'react'
import axios from 'axios';
function Dashboard() {

    const [photo, setPhoto] = useState(null);
    const [name, setName] = useState("");
    const [desc, setDesc] = useState("")


    useEffect(()=>{
        fetch("http://localhost:8000").then(x=>x.json()).then(y=>console.log(y));
    },[])

    function handleText(event){
        let text = event.target.value;
        switch(event.target.name){
            case "name":
                return setName(text);
            case "desc":
                return setDesc(text);
            case "default":
                return "Not Found";
        }
    }
    function handleChange(event){
        const file = event.target.files[0];
        //console.log(file);
        setPhoto(file);
    }

    function handleSubmit(event){
        event.preventDefault();
        //console.log(photo);
        if(photo){
            const formData = new FormData()
            formData.append("name", name);
            formData.append("desc", desc)
            formData.append("photo",photo);

            axios.post("http://localhost:8000/upload", formData, {
                headers:{
                    'Content-Type': 'multipart/form-data'
                }
            }).then((res)=>console.log(res)).catch((err)=>console.log(err));
        }
    }
    return (
        <div className="main">
            <div className="form">
                <h2>Add an Image</h2>
                <input type="text" id="name" name="name" onChange={handleText} value={name} placeholder="Enter Image Name"/>
                <input type="text" id="desc" name="desc" onChange={handleText} value={desc} placeholder="Enter Description"/>
                <input type="file" id="file" filename="photo" name="photo" onChange={handleChange}/>
                <button type="submit" onClick={handleSubmit}>Add Image</button>
            </div>
            <div className="container">
                <div className="image-grid">
                    <span className="delete">x</span>
                    <img src="https://picsum.photos/200/200"/>
                    <h4>Image</h4>
                    <h5>Description</h5>
                </div>
                <div className="image-grid">
                    <span className="delete">x</span>
                    <img src="https://picsum.photos/200/200"/>
                    <h4>Image</h4>
                    <h5>Description</h5>
                </div>
                <div className="image-grid">
                    <span className="delete">x</span>
                    <img src="https://picsum.photos/200/200"/>
                    <h4>Image</h4>
                    <h5>Description</h5>
                </div>
                <div className="image-grid">
                    <span className="delete">x</span>
                    <img src="https://picsum.photos/200/200"/>
                    <h4>Image</h4>
                    <h5>Description</h5>
                </div>
                <div className="image-grid">
                    <span className="delete">x</span>
                    <img src="https://picsum.photos/200/200"/>
                    <h4>Image</h4>
                    <h5>Description</h5>
                </div>
                <div className="image-grid">
                    <span className="delete">x</span>
                    <img src="https://picsum.photos/200/200"/>
                    <h4>Image</h4>
                    <h5>Description</h5>
                </div>
                <div className="image-grid">
                    <img src="https://picsum.photos/200/200"/>
                    <h4>Image</h4>
                    <h5>Description</h5>
                </div>
                <div className="image-grid">
                    <img src="https://picsum.photos/200/200"/>
                    <h4>Image</h4>
                    <h5>Description</h5>
                </div>
                <div className="image-grid">
                    <img src="https://picsum.photos/200/200"/>
                    <h4>Image</h4>
                    <h5>Description</h5>
                </div>
                <div className="image-grid">
                    <img src="https://picsum.photos/200/200"/>
                    <h4>Image</h4>
                    <h5>Description</h5>
                </div>
            </div>
        </div>
    )
}

export default Dashboard
