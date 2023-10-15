import React from 'react'

const Links = () => {
  const Linkedin = process.env.NEXT_PUBLIC_LINKEDIN;
  const Discord = process.env.NEXT_PUBLIC_DISCORD;
  const Github = process.env.NEXT_PUBLIC_GITHUB;
  const Email = process.env.NEXT_PUBLIC_EMAIL;
  return (
    <>
        <hr className="hrline"/>
                <section className="links">
                    <a className="li" href={Linkedin}><i className="fa-brands fa-linkedin"></i></a>
                    <a className="li" href={Discord}><i className="fa-brands fa-discord"></i></a>
                    <a className="li" href={Github}><i className="fa-brands fa-github"></i></a>
                    <a className="li" href={Email}><i className="fa-solid fa-envelope"></i></a>
                </section>
        <hr className="hrline"/>
    </>
  )
}

export default Links