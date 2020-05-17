import React from "react"
import { css } from "@emotion/core"
import { useStaticQuery, Link, graphql } from "gatsby"

import { rhythm } from "../utils/typography"
export default ({ children }) => {
    const data = useStaticQuery(
                                graphql`
                                query {
                                site {
                                siteMetadata {
                                title
                                }
                                }
                                }
                                `
                                )
    return (
            <div
            css={css`
            margin: 0 auto;
            max-width: 700px;
            font-family: charter;
            font-size: 16px;
            padding: ${rhythm(2)};
            padding-top: ${rhythm(1.5)};
            `}
            >
            <Link to={`/`}>
            <h3
            css={css`
            margin-bottom: ${rhythm(4)};
            display: inline-block;
            font-style: normal;
            `}
            >
            {data.site.siteMetadata.title}
            </h3>
            </Link>
            <Link
            to={`/about/`}
            style={{ textDecoration: 'none' }}
            css={css`
            float: right;
            color: #FA8072;
            `}
            >
            <h4 css={css`
            color: #FA8072;
            color: #fe6d73;
            `}>About</h4>
            </Link>
            {children}
            </div>
            )
}
