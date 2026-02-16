import React,{useState}from 'react'

function TabComponent() {
     const[activeTab,setActiveTab]=useState("Home")
  return (
    <div>
      <div style={Styles.container}>
        <h1>Hi! Tab-Compontent</h1>
        <div style={Styles.tabcontainer}>
            <button onClick={()=>setActiveTab("Home")}>Home</button>
             <button onClick={()=>setActiveTab("About")}>About</button>
            <button onClick={()=>setActiveTab("contact")}>Contact</button>
      </div>
       <div style={Styles.container}/>
        {activeTab === "Home" && <p>Home</p>}
        {activeTab === "About" && <p>ReactJs sec lab</p>}
        {activeTab === "Contact" && <p>@technical team</p>}

    </div>
    </div>
  )
}
const Styles={
    container:{
        minHeight:"100px",
        padding:"20px",
        border:"1px solid"
    },
    tabcontainer:{
        padding:"20px",
        border:"none",
        margin:"20px",
    },
    contentBox:{
        height:"100px",
        width:"300px",
        marginLeft:"300px",
        background:"lightblue",
        paddingTop:"10px",
    },

}
export default TabComponent
