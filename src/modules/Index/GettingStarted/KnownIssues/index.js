import React, { Component, PropTypes } from 'react'
import { View } from 'react-native-universal'
import { Display1, Headline, Body1, Body2, Divider, connectTheme, gu } from 'carbon-ui'

import createLeafOrchestrator from 'src/modules/common/createLeafOrchestrator'
import CodeBlock from 'src/modules/common/CodeBlock'
import InlineCode from 'src/modules/common/InlineCode'
import Link from 'src/modules/common/Link'
import Content from 'src/modules/common/Content'

class Components extends Component {
  render() {
    const styles = tStyles(this.props.theme)
    
    return (
      <Content style={styles.base}>
        <Display1 style={styles.display1}>Known issues</Display1>
        <Body1 style={styles.break}>
          There&apos;s only one big issue currently with Carbon UI and that&apos;s…
        </Body1>
        
        <Headline style={styles.headline}>Performance on Android</Headline>
        <Body1 style={styles.smallBreak}>
          Carbon UI leans pretty heavily on the{' '}
          <Link to="https://facebook.github.io/react-native/docs/animated.html">
            Animated API
          </Link>{' '}
          to make its its pretty animations and transitions cross-platform.
          Unfortunately, the Animated API is pretty slow, particularly on Android.
        </Body1>
        <Body1 style={styles.smallBreak}>
          The React Native team is doing{' '}
          <Link to="https://productpains.com/post/react-native/offload-some-animations-from-js-thread-for-better-perf">
          some good work
          </Link>{' '}
          to speed it up behind the scenes.
        </Body1>
        <Body1 style={styles.smallBreak}>
          Carbon UI also uses native animations wherever it can, and gracefully
          degrades to non-animated components when that&apos;s not enough.
        </Body1>
        <Body1 style={styles.smallBreak}>
          If you&apos;re building for Android, though, you&apos;ll probably need
          to do some tweaking on your end.
        </Body1>
        
        <Body2 style={styles.smallBreak}>Performance tips</Body2>
        <Body1 style={styles.listItem}>
          • Use{' '}
          <Link to="https://github.com/facebook/react-native/pull/6466#issuecomment-212606740">
            native animations
          </Link>{' '}
          wherever you can
        </Body1>
        <Body1 style={styles.listItem}>
          • Use{' '}
          <Link to="https://facebook.github.io/react-native/docs/view.html#rendertohardwaretextureandroid">
            renderToHardwareTextureAndroid
          </Link>{' '}
          wherever you can
        </Body1>
        <Body1 style={styles.break}>
          • For big transitions (like the NavigationDrawer) render as few
          components as possible while the transition is happening, and then
          add them in when it&apos;s over
        </Body1>
        
        <Body1>
          Those should take care of 80% of your performance problems. If you
          still need a little more oomph, check out{' '}
          <Link to="https://facebook.github.io/react-native/docs/android-ui-performance.html">
            Profiling Android UI Performance
          </Link>.
        </Body1>
      </Content>
    )
  }
}

Components.propTypes = {
  // connectTheme
  theme: PropTypes.object.isRequired,
}

export default
  createLeafOrchestrator('installation')(
  connectTheme(
  Components))

const tStyles = theme => ({
  break: {
    marginBottom: 8 * gu,
  },
  
  smallBreak: {
    marginBottom: 4 * gu,
  },
  
  display1: {
    marginBottom: 5 * gu,
    
    color: theme.colors.primary,
  },
  
  headline: {
    marginBottom: 4 * gu,
    
    color: theme.colors.primary,
  },
  
  listItem: {
    marginBottom: 2 * gu,
  },
})