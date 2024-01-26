import React from 'react'
import style from './index.module.scss'

function ExpericeForm() {
  const handleSubmit = () => {

  }
  return (
    <div className={style.tryout}>
      <h2>申请试用</h2>
      <div className={style.hr}></div>
      <form onSubmit={handleSubmit}>
        <div>
          <input type="text" />
          <input type="text" />
        </div>
        <div>
          <input type="text" />
          <input type="text" />
        </div>
        <textarea name="" id="" cols={30} rows={10} placeholder=" 内容描述：3D类产品使用经验、业务场景、面临的挑战、业务商业价值等"></textarea>
        <p>
          若您需要立即的资讯与服务，请直接联系
          <a href="">在线客服</a>
          或拨打免费热线010-00000000.谢谢！
        </p>
        <button>提交</button>
      </form>
    </div>
  )
}
export default ExpericeForm
