import { CustomCProps } from './../../types/generalTypes';
import * as React from 'react';
import {  Popover, Whisper } from 'rsuite';
  
const PopoverWithLoader = React.forwardRef((props, ref) => {
    const [loading, setLoading] = React.useState(true);
  
    React.useEffect(() => {
      setTimeout(() => setLoading(false), 2000);
    }, []);
  
    return (
        // @ts-ignore
      <Popover ref={ref} {...props}>
        {loading ? (
            <>Loading</>
        ) : (
          <div>
            <p>This is a Popover.</p>
            <p>The loading content is loaded.</p>
          </div>
        )}
      </Popover>
    );
  });
  
  const CustomComponent = ({ placement= 'auto', loading = true, children }: CustomCProps) => (
    <Whisper
      trigger="click"
      // @ts-ignore
      placement={placement}
      controlId={`control-id-${placement}`}
      speaker={
        loading ? (
          <PopoverWithLoader />
        ) : <></>
      }
    >
      <div style={{height: 'auto', width: 'auto'}} >{children || placement}</div >
    </Whisper>
  );
  export { 
    CustomComponent,
    PopoverWithLoader,
  }
  