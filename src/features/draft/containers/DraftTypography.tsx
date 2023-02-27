import Typography from '@mui/material/Typography/Typography'

const DraftTypography = () => {
  return (
    <div className="draft-page draft-typo">
      <h2>MUI &lt;Typography/&gt; components</h2>
      <table>
        <thead>
          <tr>
            <th style={{ width: '120px' }}>Variants</th>
            <th>Demo</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>body1</th>
            <td>
              <Typography variant="body1">body 1</Typography>
            </td>
          </tr>
          <tr>
            <th>body2</th>
            <td>
              <Typography variant="body2">body 2</Typography>
            </td>
          </tr>
          <tr>
            <th>button</th>
            <td>
              <Typography variant="button" fontSize={{ xs: 16, sm: 24 }}>
                button
              </Typography>
            </td>
          </tr>
          <tr>
            <th>caption</th>
            <td>
              <Typography variant="caption">caption</Typography>
            </td>
          </tr>
          <tr>
            <th>inherit</th>
            <td>
              <Typography variant="inherit">inherit</Typography>
            </td>
          </tr>
          {/* <tr>
            <th>overline</th>
            <td>
              <Typography variant="overline">overline</Typography>
            </td>
          </tr>
          <tr>
            <th>subtitle1</th>
            <td>
              <Typography variant="subtitle1">subtitle1</Typography>
            </td>
          </tr>
          <tr>
            <th>subtitle2</th>
            <td>
              <Typography variant="subtitle2">subtitle2</Typography>
            </td>
          </tr> */}
          <tr>
            <th>h1</th>
            <td>
              <Typography variant="h1">h1</Typography>
            </td>
          </tr>
          <tr>
            <th>h2</th>
            <td>
              <Typography variant="h2">h2</Typography>
            </td>
          </tr>
          <tr>
            <th>h3</th>
            <td>
              <Typography variant="h3">h3</Typography>
            </td>
          </tr>
          <tr>
            <th>h4</th>
            <td>
              <Typography variant="h4">h4</Typography>
            </td>
          </tr>
          <tr>
            <th>h5</th>
            <td>
              <Typography variant="h5">h5</Typography>
            </td>
          </tr>
          <tr>
            <th colSpan={2}>Custom</th>
          </tr>
          <tr>
            <th>title</th>
            <td>
              <Typography variant="title">title</Typography>
            </td>
          </tr>
          <tr>
            <th>title2</th>
            <td>
              <Typography variant="title2">title2</Typography>
            </td>
          </tr>
          <tr>
            <th>title3</th>
            <td>
              <Typography variant="title3">title3</Typography>
            </td>
          </tr>
          <tr>
            <th>title4</th>
            <td>
              <Typography variant="title4">title4</Typography>
            </td>
          </tr>
          <tr>
            <th>title5</th>
            <td>
              <Typography variant="title5">title5</Typography>
            </td>
          </tr>
          <tr>
            <th>body3</th>
            <td>
              <Typography variant="body3">body3</Typography>
            </td>
          </tr>
          <tr>
            <th>caption2</th>
            <td>
              <Typography variant="caption2">caption2</Typography>
            </td>
          </tr>
          {/* <tr>
            <th>h6</th>
            <td>
              <Typography variant="h6">h6</Typography>
            </td>
          </tr> */}
        </tbody>
      </table>
      <hr />
      <h2>Native tags</h2>
      <table>
        <thead>
          <tr>
            <th style={{ width: '120px' }}>Tags</th>
            <th>Demo</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>
              <code>&lt;h1&gt;</code>
            </th>
            <td>
              <h1>Used for main headings on the page.</h1>
            </td>
          </tr>
          <tr>
            <th>
              <code>&lt;h2&gt;</code>
            </th>
            <td>
              <h2>Used for subheadings on the page.</h2>
            </td>
          </tr>
          <tr>
            <th>
              <code>&lt;h3&gt;</code>
            </th>
            <td>
              <h3>Used for sub-subheadings on the page.</h3>
            </td>
          </tr>
          <tr>
            <th>
              <code>&lt;h4&gt;</code>
            </th>
            <td>
              <h4>Used for section headings on the page.</h4>
            </td>
          </tr>
          <tr>
            <th>
              <code>&lt;h5&gt;</code>
            </th>
            <td>
              <h5>Used for subsection headings on the page.</h5>
            </td>
          </tr>
          <tr>
            <th>
              <code>&lt;h6&gt;</code>
            </th>
            <td>
              <h6>Used for sub-subsection headings on the page.</h6>
            </td>
          </tr>
          {/* row */}
          <tr>
            <th>
              <code>&lt;p&gt;</code>
            </th>
            <td>
              <p>Used to define a paragraph.</p>
            </td>
          </tr>
          <tr>
            <th>
              <code>&lt;a&gt;</code>
            </th>
            <td>
              <a href="#">Used for links.</a>
            </td>
          </tr>
          <tr>
            <th>
              <code>&lt;em&gt;</code>
            </th>
            <td>
              <em>Used to emphasize text.</em>
            </td>
          </tr>
          <tr>
            <th>
              <code>&lt;strong&gt;</code>
            </th>
            <td>
              <strong>Used to strongly emphasize text.</strong>
            </td>
          </tr>
          <tr>
            <th>
              <code>&lt;small&gt;</code>
            </th>
            <td>
              <small>Used for smaller text.</small>
            </td>
          </tr>
          <tr>
            <th>
              <code>&lt;sub&gt;</code>
            </th>
            <td>
              <sub>Used to indicate subscript text.</sub>
            </td>
          </tr>
          <tr>
            <th>
              <code>&lt;sup&gt;</code>
            </th>
            <td>
              <sup>Used to indicate superscript text.</sup>
            </td>
          </tr>
          <tr>
            <th>
              <code>&lt;del&gt;</code>
            </th>
            <td>
              <del>Used to indicate deleted text.</del>
            </td>
          </tr>
          <tr>
            <th>
              <code>&lt;ins&gt;</code>
            </th>
            <td>
              <ins>Used to indicate inserted text.</ins>
            </td>
          </tr>

          <tr>
            <th>
              <code>&lt;mark&gt;</code>
            </th>
            <td>
              <mark>Used to highlight text.</mark>
            </td>
          </tr>
          <tr>
            <th>
              <code>&lt;abbr&gt;</code>
            </th>
            <td>
              <abbr>Used for abbreviations.</abbr>
            </td>
          </tr>
          <tr>
            <th>
              <code>&lt;cite&gt;</code>
            </th>
            <td>
              <cite>Used to cite a work.</cite>
            </td>
          </tr>

          <tr>
            <th>
              <code>&lt;blockquote&gt;</code>
            </th>
            <td>
              <blockquote>Used for long quotations.</blockquote>
            </td>
          </tr>
          <tr>
            <th>
              <code>&lt;q&gt;</code>
            </th>
            <td>
              <q>Used for short quotations.</q>
            </td>
          </tr>

          <tr>
            <th>
              <code>&lt;address&gt;</code>
            </th>
            <td>
              <address>Used for contact information.</address>
            </td>
          </tr>
          <tr>
            <th>
              <code>&lt;pre&gt;</code>
            </th>
            <td>
              <pre>Used for preformatted text.</pre>
            </td>
          </tr>
          <tr>
            <th>
              <code>&lt;code&gt;</code>
            </th>
            <td>
              <code>Used for code snippets.</code>
            </td>
          </tr>
          {/*  */}
          <tr>
            <th>
              <code>&lt;kbd&gt;</code>
            </th>
            <td>
              <kbd>Used to define keyboard input.</kbd>
            </td>
          </tr>
          <tr>
            <th>
              <code>&lt;var&gt;</code>
            </th>
            <td>
              <var>Used to define a variable.</var>
            </td>
          </tr>
          <tr>
            <th>
              <code>&lt;samp&gt;</code>
            </th>
            <td>
              <samp>Used to define sample output from a computer program.</samp>
            </td>
          </tr>
          <tr>
            <th>
              <code>&lt;time&gt;</code>
            </th>
            <td>
              <time>Used to define a date or time.</time>
            </td>
          </tr>
          <tr>
            <th>
              <code>&lt;dfn&gt;</code>
            </th>
            <td>
              <dfn>
                Used to define a term that is being defined in the document.
              </dfn>
            </td>
          </tr>
          <tr>
            <th>
              <code>&lt;bdo&gt;</code>
            </th>
            <td>
              <bdo>
                Used to define the direction of text (left-to-right or
                right-to-left).
              </bdo>
            </td>
          </tr>
          <tr>
            <th>
              <code>&lt;ruby&gt; &lt;rt&gt;</code>
            </th>
            <td>
              <ruby>
                Used to define <rt>ruby</rt> annotations, which are small text
                annotations usually used for pronunciation guidance in East
                Asian languages.
              </ruby>
            </td>
          </tr>
          <tr>
            <th>
              <code>&lt;span&gt;</code>
            </th>
            <td>
              <span>A generic container used to group inline elements.</span>
            </td>
          </tr>
          <tr>
            <th>
              <code>&lt;div&gt;</code>
            </th>
            <td>
              <div>A generic container used to group block-level elements.</div>
            </td>
          </tr>
          <tr>
            <th>
              <code>&lt;ol&gt;</code>
            </th>
            <td>
              <ol>
                <li>Item 1</li>
                <li>Item 2</li>
              </ol>
            </td>
          </tr>
          <tr>
            <th>
              <code>&lt;ul&gt;</code>
            </th>
            <td>
              <ul>
                <li>Item 1</li>
                <li>Item 2</li>
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
      <hr />
    </div>
  )
}

export default DraftTypography
