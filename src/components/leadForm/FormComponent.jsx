import"./formcomponent.css"
import FormLeftCompnent from "./LeftComponent/LeftComponent"
import LeadForm from "./rightComponent/LeadForm"


const FormComponent = ()=>{

    return(
        <>
    
                <div className="FormComponent">
                <FormLeftCompnent/>
                <LeadForm/>
                </div>
            <div className="waveComponent"></div>
            

        </>
    )
}

export default FormComponent;