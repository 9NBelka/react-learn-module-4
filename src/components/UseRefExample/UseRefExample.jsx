import { useRef } from "react"

function UseRefExample() {
  const formRef = useRef();

  const hanldeScroll = () => {
    const dims = formRef.current.getBoundingClientRect();

    window.scrollTo({
      top: dims.top,
      behavior: "smooth"
    });
  };

  return(
  <>
    <div><button onClick={hanldeScroll}>handleScroll</button></div>
    <div><p>dfkmdkfgmdkkmgkmgdkddgndmgdnmgknkjgdnmkjwnmgndgdnmgndgndkgdnmgdk</p></div>
      <div><p>dfkmdkfgmdkkmgkmgdkddgndmgdnmgknkjgdnmkjwnmgndgdnmgndgndkgdnmgdk</p></div>
      <div><p>dfkmdkfgmdkkmgkmgdkddgndmgdnmgknkjgdnmkjwnmgndgdnmgndgndkgdnmgdk</p></div>
      <div><p>dfkmdkfgmdkkmgkmgdkddgndmgdnmgknkjgdnmkjwnmgndgdnmgndgndkgdnmgdk</p></div>
      <div><p>dfkmdkfgmdkkmgkmgdkddgndmgdnmgknkjgdnmkjwnmgndgdnmgndgndkgdnmgdk</p></div>
      <div><p>dfkmdkfgmdkkmgkmgdkddgndmgdnmgknkjgdnmkjwnmgndgdnmgndgndkgdnmgdk</p></div>
      <div><p>dfkmdkfgmdkkmgkmgdkddgndmgdnmgknkjgdnmkjwnmgndgdnmgndgndkgdnmgdk</p></div>
      <div><p>dfkmdkfgmdkkmgkmgdkddgndmgdnmgknkjgdnmkjwnmgndgdnmgndgndkgdnmgdk</p></div>
      <div><p>dfkmdkfgmdkkmgkmgdkddgndmgdnmgknkjgdnmkjwnmgndgdnmgndgndkgdnmgdk</p></div>
      <div><p>dfkmdkfgmdkkmgkmgdkddgndmgdnmgknkjgdnmkjwnmgndgdnmgndgndkgdnmgdk</p></div>
      <div><p>dfkmdkfgmdkkmgkmgdkddgndmgdnmgknkjgdnmkjwnmgndgdnmgndgndkgdnmgdk</p></div><div><p>dfkmdkfgmdkkmgkmgdkddgndmgdnmgknkjgdnmkjwnmgndgdnmgndgndkgdnmgdk</p></div>
      <div><p>dfkmdkfgmdkkmgkmgdkddgndmgdnmgknkjgdnmkjwnmgndgdnmgndgndkgdnmgdk</p></div>
      <div><p>dfkmdkfgmdkkmgkmgdkddgndmgdnmgknkjgdnmkjwnmgndgdnmgndgndkgdnmgdk</p></div>
      <div><p>dfkmdkfgmdkkmgkmgdkddgndmgdnmgknkjgdnmkjwnmgndgdnmgndgndkgdnmgdk</p></div>
      <div><p>dfkmdkfgmdkkmgkmgdkddgndmgdnmgknkjgdnmkjwnmgndgdnmgndgndkgdnmgdk</p></div>
      <div><p>dfkmdkfgmdkkmgkmgdkddgndmgdnmgknkjgdnmkjwnmgndgdnmgndgndkgdnmgdk</p></div>
      <div><p>dfkmdkfgmdkkmgkmgdkddgndmgdnmgknkjgdnmkjwnmgndgdnmgndgndkgdnmgdk</p></div>
      <div><p>dfkmdkfgmdkkmgkmgdkddgndmgdnmgknkjgdnmkjwnmgndgdnmgndgndkgdnmgdk</p></div>
      <div><p>dfkmdkfgmdkkmgkmgdkddgndmgdnmgknkjgdnmkjwnmgndgdnmgndgndkgdnmgdk</p></div>
      <div><p>dfkmdkfgmdkkmgkmgdkddgndmgdnmgknkjgdnmkjwnmgndgdnmgndgndkgdnmgdk</p></div>
      <div><p>dfkmdkfgmdkkmgkmgdkddgndmgdnmgknkjgdnmkjwnmgndgdnmgndgndkgdnmgdk</p></div><div><p>dfkmdkfgmdkkmgkmgdkddgndmgdnmgknkjgdnmkjwnmgndgdnmgndgndkgdnmgdk</p></div>
      <div><p>dfkmdkfgmdkkmgkmgdkddgndmgdnmgknkjgdnmkjwnmgndgdnmgndgndkgdnmgdk</p></div>
      <div><p>dfkmdkfgmdkkmgkmgdkddgndmgdnmgknkjgdnmkjwnmgndgdnmgndgndkgdnmgdk</p></div>
      <div><p>dfkmdkfgmdkkmgkmgdkddgndmgdnmgknkjgdnmkjwnmgndgdnmgndgndkgdnmgdk</p></div>
      <div><p>dfkmdkfgmdkkmgkmgdkddgndmgdnmgknkjgdnmkjwnmgndgdnmgndgndkgdnmgdk</p></div>
      <div><p>dfkmdkfgmdkkmgkmgdkddgndmgdnmgknkjgdnmkjwnmgndgdnmgndgndkgdnmgdk</p></div>
      <div><p>dfkmdkfgmdkkmgkmgdkddgndmgdnmgknkjgdnmkjwnmgndgdnmgndgndkgdnmgdk</p></div>
      <div><p>dfkmdkfgmdkkmgkmgdkddgndmgdnmgknkjgdnmkjwnmgndgdnmgndgndkgdnmgdk</p></div>
      <div><p>dfkmdkfgmdkkmgkmgdkddgndmgdnmgknkjgdnmkjwnmgndgdnmgndgndkgdnmgdk</p></div>
      <div><p>dfkmdkfgmdkkmgkmgdkddgndmgdnmgknkjgdnmkjwnmgndgdnmgndgndkgdnmgdk</p></div>
      <div><p>dfkmdkfgmdkkmgkmgdkddgndmgdnmgknkjgdnmkjwnmgndgdnmgndgndkgdnmgdk</p></div><div><p>dfkmdkfgmdkkmgkmgdkddgndmgdnmgknkjgdnmkjwnmgndgdnmgndgndkgdnmgdk</p></div>
      <div><p>dfkmdkfgmdkkmgkmgdkddgndmgdnmgknkjgdnmkjwnmgndgdnmgndgndkgdnmgdk</p></div>
      <div><p>dfkmdkfgmdkkmgkmgdkddgndmgdnmgknkjgdnmkjwnmgndgdnmgndgndkgdnmgdk</p></div>
      <div><p>dfkmdkfgmdkkmgkmgdkddgndmgdnmgknkjgdnmkjwnmgndgdnmgndgndkgdnmgdk</p></div>
      <div><p>dfkmdkfgmdkkmgkmgdkddgndmgdnmgknkjgdnmkjwnmgndgdnmgndgndkgdnmgdk</p></div>
      <div><p>dfkmdkfgmdkkmgkmgdkddgndmgdnmgknkjgdnmkjwnmgndgdnmgndgndkgdnmgdk</p></div>
      <div><p>dfkmdkfgmdkkmgkmgdkddgndmgdnmgknkjgdnmkjwnmgndgdnmgndgndkgdnmgdk</p></div>
      <div><p>dfkmdkfgmdkkmgkmgdkddgndmgdnmgknkjgdnmkjwnmgndgdnmgndgndkgdnmgdk</p></div>
      <div><p>dfkmdkfgmdkkmgkmgdkddgndmgdnmgknkjgdnmkjwnmgndgdnmgndgndkgdnmgdk</p></div>
      <div><p>dfkmdkfgmdkkmgkmgdkddgndmgdnmgknkjgdnmkjwnmgndgdnmgndgndkgdnmgdk</p></div>
      <div><p>dfkmdkfgmdkkmgkmgdkddgndmgdnmgknkjgdnmkjwnmgndgdnmgndgndkgdnmgdk</p></div>

    <div><form ref={formRef}>
      <input type="email" placeholder="u email" />
      <button>send now</button>
      </form></div>


      <div><p>dfkmdkfgmdkkmgkmgdkddgndmgdnmgknkjgdnmkjwnmgndgdnmgndgndkgdnmgdk</p></div>
      <div><p>dfkmdkfgmdkkmgkmgdkddgndmgdnmgknkjgdnmkjwnmgndgdnmgndgndkgdnmgdk</p></div>
      <div><p>dfkmdkfgmdkkmgkmgdkddgndmgdnmgknkjgdnmkjwnmgndgdnmgndgndkgdnmgdk</p></div>
      <div><p>dfkmdkfgmdkkmgkmgdkddgndmgdnmgknkjgdnmkjwnmgndgdnmgndgndkgdnmgdk</p></div>
      <div><p>dfkmdkfgmdkkmgkmgdkddgndmgdnmgknkjgdnmkjwnmgndgdnmgndgndkgdnmgdk</p></div>
      <div><p>dfkmdkfgmdkkmgkmgdkddgndmgdnmgknkjgdnmkjwnmgndgdnmgndgndkgdnmgdk</p></div>
      <div><p>dfkmdkfgmdkkmgkmgdkddgndmgdnmgknkjgdnmkjwnmgndgdnmgndgndkgdnmgdk</p></div>
      <div><p>dfkmdkfgmdkkmgkmgdkddgndmgdnmgknkjgdnmkjwnmgndgdnmgndgndkgdnmgdk</p></div>
      <div><p>dfkmdkfgmdkkmgkmgdkddgndmgdnmgknkjgdnmkjwnmgndgdnmgndgndkgdnmgdk</p></div>
      <div><p>dfkmdkfgmdkkmgkmgdkddgndmgdnmgknkjgdnmkjwnmgndgdnmgndgndkgdnmgdk</p></div>
      <div><p>dfkmdkfgmdkkmgkmgdkddgndmgdnmgknkjgdnmkjwnmgndgdnmgndgndkgdnmgdk</p></div>
<div><p>dfkmdkfgmdkkmgkmgdkddgndmgdnmgknkjgdnmkjwnmgndgdnmgndgndkgdnmgdk</p></div>
      <div><p>dfkmdkfgmdkkmgkmgdkddgndmgdnmgknkjgdnmkjwnmgndgdnmgndgndkgdnmgdk</p></div>
      <div><p>dfkmdkfgmdkkmgkmgdkddgndmgdnmgknkjgdnmkjwnmgndgdnmgndgndkgdnmgdk</p></div>
      <div><p>dfkmdkfgmdkkmgkmgdkddgndmgdnmgknkjgdnmkjwnmgndgdnmgndgndkgdnmgdk</p></div>
      <div><p>dfkmdkfgmdkkmgkmgdkddgndmgdnmgknkjgdnmkjwnmgndgdnmgndgndkgdnmgdk</p></div>
      <div><p>dfkmdkfgmdkkmgkmgdkddgndmgdnmgknkjgdnmkjwnmgndgdnmgndgndkgdnmgdk</p></div>
      <div><p>dfkmdkfgmdkkmgkmgdkddgndmgdnmgknkjgdnmkjwnmgndgdnmgndgndkgdnmgdk</p></div>
      <div><p>dfkmdkfgmdkkmgkmgdkddgndmgdnmgknkjgdnmkjwnmgndgdnmgndgndkgdnmgdk</p></div>
      <div><p>dfkmdkfgmdkkmgkmgdkddgndmgdnmgknkjgdnmkjwnmgndgdnmgndgndkgdnmgdk</p></div>
      <div><p>dfkmdkfgmdkkmgkmgdkddgndmgdnmgknkjgdnmkjwnmgndgdnmgndgndkgdnmgdk</p></div>
      <div><p>dfkmdkfgmdkkmgkmgdkddgndmgdnmgknkjgdnmkjwnmgndgdnmgndgndkgdnmgdk</p></div><div><p>dfkmdkfgmdkkmgkmgdkddgndmgdnmgknkjgdnmkjwnmgndgdnmgndgndkgdnmgdk</p></div>
      <div><p>dfkmdkfgmdkkmgkmgdkddgndmgdnmgknkjgdnmkjwnmgndgdnmgndgndkgdnmgdk</p></div>
      <div><p>dfkmdkfgmdkkmgkmgdkddgndmgdnmgknkjgdnmkjwnmgndgdnmgndgndkgdnmgdk</p></div>
      <div><p>dfkmdkfgmdkkmgkmgdkddgndmgdnmgknkjgdnmkjwnmgndgdnmgndgndkgdnmgdk</p></div>
      <div><p>dfkmdkfgmdkkmgkmgdkddgndmgdnmgknkjgdnmkjwnmgndgdnmgndgndkgdnmgdk</p></div>
      <div><p>dfkmdkfgmdkkmgkmgdkddgndmgdnmgknkjgdnmkjwnmgndgdnmgndgndkgdnmgdk</p></div>
      <div><p>dfkmdkfgmdkkmgkmgdkddgndmgdnmgknkjgdnmkjwnmgndgdnmgndgndkgdnmgdk</p></div>
      <div><p>dfkmdkfgmdkkmgkmgdkddgndmgdnmgknkjgdnmkjwnmgndgdnmgndgndkgdnmgdk</p></div>
      <div><p>dfkmdkfgmdkkmgkmgdkddgndmgdnmgknkjgdnmkjwnmgndgdnmgndgndkgdnmgdk</p></div>
      <div><p>dfkmdkfgmdkkmgkmgdkddgndmgdnmgknkjgdnmkjwnmgndgdnmgndgndkgdnmgdk</p></div>
      <div><p>dfkmdkfgmdkkmgkmgdkddgndmgdnmgknkjgdnmkjwnmgndgdnmgndgndkgdnmgdk</p></div>
      
  </>
)}

export default UseRefExample