
import img1 from '../assets/instagram-svgrepo-com.svg'
export default function Ex1()
{
    const style={
        container:{
            margin:"200px",
            justifyContent:'center',
            alignItems:'center',
            backgroundColor:"black",
            color:"white",
            width:"300%",
            height:"1000px",
            margin:"50px",
        },
        main:{
            display:"flex",
        },
        sub:{
            display:"flex",
            margin:"80px",
            padding:"40px 90px",
        },
        end:{
            backgroundColor:"black",
            padding:"20px 50px",
        },
        sube:{
            display:"flex",
            margin:"20px",
            padding:"10px 20px",
        },
        buttona:{
            backgroundColor:"orange",
            width:"80px",
            height:"60px",
            borderRadius:"5px",
        },
        buttonb:{
            backgroundColor:"orange",
            width:"150px",
            height:"50px",
            borderRadius:"10px",
        },
        buttonc:{
            backgroundColor:"orange",
            width:"200px",
            height:"40px",
            borderRadius:"10px",
        },
        buttond:{
            backgroundColor:"orange",
            width:"200px",
            height:"40px",
            borderRadius:"10px",
        },
        img:{
            backgroundColor:'white',
        }

    }

    return(
        <div style={style.container}>
            <img src={img1} alt="" style={style.img}/>
            <div style={style.sube} >
                <a style={style.sube }>PraRoz</a>
                <a style={style.sube}>HOME</a>
                <a style={style.sube}>ABOUT</a>
                <a style={style.sube}>SERVICE</a>
                <a style={style.sube}>DESIGN</a>
                <a style={style.sube}>CONTACT</a>
                <form style={style.sube}>
                    <input type="text" placeholder="Type to Search"></input>
                    <button style={style.buttona} >search</button>
                </form> 
            </div>  
            <div style={style.main}> 

                <div>
                    <h1>Web Disign & <br/>Development<br/>Course</h1>
                    <p>Web Design is a specialisation of the Design stream. they also use HTML.<br/>CSS.WYSIWYG editing software. mark up validators etc..<br/>to create Design elements.</p>
                    <button style={style.buttonb}>JOIN US</button>
                </div> 
                <div style={style.end}>
                
                        <button style={style.buttonc}>Login Here</button>
                    <form> 
                        <input type="Email" placeholder="Enter Email Here"></input><br/>
                        <input type="password" placeholder="Enter Password Here"></input><br/>
                        <button style={style.buttond}>Login</button>

                    </form>
                    <h3>Don't have an account?<br/>Sign up here<br/>Log in with</h3>
                    <img src={img1} alt="" style={style.img}/>
                </div> 
            </div>

        </div>
    )
}