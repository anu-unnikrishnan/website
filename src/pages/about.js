import React from "react"
import { css } from "@emotion/core"
import { graphql } from "gatsby"
import { rhythm } from "../utils/typography"
import Layout from "../components/layout"
//put after 'about me': {data.site.siteMetadata.title}

export default ({ data }) => (
                              <Layout>
                              <h1
            css={css`
            display: block;
            text-decoration: underline;
            text-decoration-thickness: 1px;
            margin-bottom: ${rhythm(2)}; //space under Projects
            `}
            >
            About me
            </h1>
                              <p></p>
                              <h3>Currently</h3>
                              <p>Learning about AI and how to be a better programmer at the Recurse Center!</p>
                              <p></p>
                              <h3>Previously</h3>
                              <p>A quantum cryptography researcher at Oxford.</p>
                              <p>Worked on building secure protocols for quantum networks, such as authenticated teleportation, anonymous quantum communication, and graph state verification, with all sorts of misbehaving participants.</p>
                              <a
                              css={css`
                              color: #FA8072`}  href="https://www.linkedin.com/in/anuunnikrishnan/">LinkedIn</a>
                              &nbsp; / &nbsp;
                              <a
                              css={css`
                              color: #FA8072;`} 
                              href="https://github.com/anu-unnikrishnan">Github</a>
                              &nbsp; / &nbsp;
                              <a
                              css={css`
                              color: #FA8072;`} 
                              href="https://arxiv.org/search/?query=anupama+unnikrishnan&searchtype=all&source=header">Publications</a>
                                &nbsp; / &nbsp;
                              <a
                              css={css`
                              color: #FA8072;`}  href="https://ora.ox.ac.uk/objects/uuid:8309d4e8-5f4c-4e86-9381-fcaf2f6626f1">PhD Thesis</a>
                              </Layout>
                              )
//old colours: #00CED1, #FF6347, #4169E1, #FF8C00
//pink colour: #FA8072

export const query = graphql`
query {
    site {
        siteMetadata {
            title
        }
    }
}
`
