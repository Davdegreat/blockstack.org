import React from 'react'
import Link from 'next/link'
import { connect } from 'redux-bundler-react'
import ReactMarkdown from 'react-markdown'

const BadConnection = (
  <div
    style={{
      minHeight: '350px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center'
    }}
  >
    <h1>Connection Error</h1>
    <p>
      We ran into some issues fetching our blog. Feel free to refresh the page.
    </p>
  </div>
)

const ListItem = ({
  title,
  url,
  urlSlug,
  markup,
  description,
  image,
  date
}) => {
  return description ? (
    <div style={{ maxWidth: '700px', paddingBottom: '80px' }}>
      <h6 style={{ margin: 0 }}>{date}</h6>
      <Link
        prefetch
        as={`/blog/${urlSlug}`}
        href={`/blog/single?slug=${urlSlug}`}
      >
        <a>
          <h3 style={{ margin: '20px 0 0 0' }}>{title}</h3>
        </a>
      </Link>
      <ReactMarkdown source={description} />
      <Link
        prefetch
        as={`/blog/${urlSlug}`}
        href={`/blog/single?slug=${urlSlug}`}
      >
        <a>Read more</a>
      </Link>
    </div>
  ) : null
}

const BlogList = connect(
  'selectBlogPosts',
  ({ blogPosts }) =>
    blogPosts && blogPosts.length
      ? blogPosts.map((post, i) => <ListItem {...post} key={i} />)
      : BadConnection
)

export { BlogList, BadConnection }
