import React from "react";
import { Button, Modal } from "rsuite";
import { useMediaQuery } from 'react-responsive'


const LoginModal = ({isActive = ""}) => {
    const [open, setOpen] = React.useState(false);
    const [overflow] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const isMobile = useMediaQuery({ maxWidth: 767 })

    return (
        
      <div className="modal-container">
        <a className={["nav-text", isActive].join(" ")} href="#" onClick={handleOpen}>Ingresar</a> 

        <Modal full={isMobile} overflow={overflow} open={open} onClose={handleClose}>
          <Modal.Header className="p-0">
            {/* <Modal.Title>Modal Title</Modal.Title> */}
            {/* <Image src={require('@svgs/cross.svg')} height={20} width={20} /> */}
          </Modal.Header>
          <Modal.Body>
            <h2>Modal!</h2>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={handleClose} appearance="primary">
              Ok
            </Button>
            <Button onClick={handleClose} appearance="subtle">
              Cancel
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  };
  
  export default LoginModal
