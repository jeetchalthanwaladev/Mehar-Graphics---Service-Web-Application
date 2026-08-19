import { useState } from "react";

export default function GetQuote(){
  const [form, setForm] = useState({ name:"", phone:"", email:"", requirement:"" });
  function handle(e){ setForm(f => ({ ...f, [e.target.name]: e.target.value })); }
  function submit(e){ e.preventDefault(); alert("Thanks! We will contact you shortly."); }

  return (
    <section className="section">
      <div className="container">
        <h2>Get a Free Quote</h2>
        <p className="sub">Tell us about your printing requirement and we’ll get back within one business day.</p>

        <form onSubmit={submit} className="card" style={{maxWidth:640, margin:"0 auto"}}>
          <label>Full Name
            <input name="name" value={form.name} onChange={handle} required style={inp}/>
          </label>
          <label>Phone
            <input name="phone" value={form.phone} onChange={handle} required style={inp}/>
          </label>
          <label>Email
            <input name="email" type="email" value={form.email} onChange={handle} required style={inp}/>
          </label>
          <label>Requirement
            <textarea name="requirement" rows="4" value={form.requirement} onChange={handle} required style={inp}/>
          </label>
          <button className="btn primary" type="submit">Submit</button>
        </form>
      </div>
    </section>
  );
}

const inp = {
  width:"100%", marginTop:6, marginBottom:14, padding:"10px 12px",
  border:"1px solid #e5e7eb", borderRadius:10, fontFamily:"inherit", fontSize:"1rem"
};
