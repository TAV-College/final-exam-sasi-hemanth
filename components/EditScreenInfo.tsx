import React from 'react';
import { StyleSheet } from 'react-native';

import { ExternalLink } from './ExternalLink'; // Make sure these components exist
import { MonoText } from './StyledText'; // Make sure these components exist
import { Text, View } from './Themed'; // Make sure these components exist

import Colors from 'constants/Colors';

export default function EditScreenInfo({ path }: { path: string }) {
  return (
    <View>
      <View style={styles.infoContainer}>
        <Text
          style={styles.infoText}
          lightColor="rgba(0,0,0,0.8)"
          darkColor="rgba(255,255,255,0.8)">
          Here you can see the details of the current screen or feature.
        </Text>

        <View
          style={[styles.codeHighlightContainer, styles.pathContainer]}
          darkColor="rgba(255,255,255,0.05)"
          lightColor="rgba(0,0,0,0.05)">
          <MonoText>{path}</MonoText>
        </View>

        <Text
          style={styles.infoText}
          lightColor="rgba(0,0,0,0.8)"
          darkColor="rgba(255,255,255,0.8)">
          Explore more features or visit our documentation.
        </Text>
      </View>

      <View style={styles.helpContainer}>
        <ExternalLink
          style={styles.helpLink}
          href="https://your-project-docs-link.com">
          <Text style={styles.helpLinkText} lightColor={Colors.light.tint}>
            Learn more about this feature
          </Text>
        </ExternalLink>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  infoContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  pathContainer: {
    marginVertical: 7,
  },
  codeHighlightContainer: {
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  infoText: {
    fontSize: 17,
    lineHeight: 24,
    textAlign: 'center',
  },
  helpContainer: {
    marginTop: 15,
    marginHorizontal: 20,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    textAlign: 'center',
  },
});
