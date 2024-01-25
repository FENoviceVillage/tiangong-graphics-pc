import React from 'react'
import Icon from '@//assets/imgs/quote/对钩图标.png';

type Props = {
  text: string
}
export const SuccessIcon: React.FC<Props> = props => {
  return (
    <div style={{
      display: 'flex',
padding:' 10px 0'
    }}>
      <img src={Icon} alt="" style={{ width: 16, height: 16 }} />
      <div style={{
        fontSize: 16,
        fontFamily: 'Source Han Sans SC',
        fontWeight: 400,
        color: '#EC9C5B',
      }}>{props.text}</div>
    </div>
  )
};
export default SuccessIcon
