import React from "react"
import { css } from "@emotion/core"
import { Link, graphql } from "gatsby"
import { rhythm } from "../utils/typography"
import Layout from "../components/layout"
//put under </h1>: "<h4>{data.allMarkdownRemark.totalCount} Posts</h4>"

export default ({ data }) => {
    return (
            <Layout>
            <div>
            <h1
            css={css`
            display: inline-block;
            text-decoration: underline;
            text-decoration-thickness: 1px;
            margin-bottom: ${rhythm(2)}; //space under Projects
            `}
            >
            Projects
            </h1>
            {data.allMarkdownRemark.edges.map(({ node }) => (
                                                            <div key={node.id}>
                                                             <Link
                                                             to={node.fields.slug}
                                                             css={css`
                                                             text-decoration: none;
                                                             color: inherit;
                                                             `}
                                                             >
                                                             <h3
                                                             css={css`
                                                             margin-bottom: ${rhythm(1 / 4)};
                                                             `}
                                                             >
                                                            {node.frontmatter.title}{" "}
                                                <span
                                                css={css`
                                                color: #FF6347; //date colour
                                                font-size: 14px //date font size
                                                 `}
                                                 >
                         {node.frontmatter.date}
                                                             </span>
                                                             </h3>
                                                             <p
                                                             css={css`
                                                             margin-bottom: ${rhythm(1.5)};`}>{node.excerpt}</p>
                                                             </Link>
                                                             </div>
                                                             ))}
            </div>
            </Layout>
            )
}

export const query = graphql`
query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
        totalCount
        edges {
            node {
                id
                frontmatter {
                    title
                    date(formatString: "DD-MMM-YY") 
                }
                fields {
                    slug
                }
                excerpt
            }
        }
    }
}
`
