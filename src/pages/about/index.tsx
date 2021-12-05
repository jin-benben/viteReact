import { Button,Modal } from "antd"


const About = () => {
  function openModal (){
    Modal.success({
      title:"问候",
      content:"你好吗"
    })
  }
  return (
    <div>
      Aboutssa
      <Button onClick={openModal}>点击</Button>
    </div>
  )
}

export default About
