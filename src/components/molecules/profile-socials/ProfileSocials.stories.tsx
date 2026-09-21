import { StoryFn, Meta } from '@storybook/react'
import ProfileSocials from './ProfileSocials'

export default {
  title: 'Molecules/Profile Socials',
  component: ProfileSocials,
} as Meta<typeof ProfileSocials>

const Template: StoryFn<typeof ProfileSocials> = (args) => <ProfileSocials {...args} />

export const Socials = Template.bind({})
Socials.args = {
  name: 'vitalik.eth',
  userAddress: '0xd8da6bf26964af9d7eed9e03e53415d37aa96045',
  records: {
    url: 'https://vitalik.ca',
    'com.github': 'vbuterin',
    'com.twitter': 'VitalikButerin',
    contenthash: 'ipfs://bafybeifvusbh4iunpvwjlowu47sxnt4hjlebx46kxi4yz5zdsoecfpkkei',
  },
  includeUrls: true,
  iconSize: 36,
  showEmptySocials: true,
  hideSocials: ['vision', 'opensea'],
}

export const WithThurin = Template.bind({})
WithThurin.args = {
  name: 'thurinlabs.eth',
  userAddress: '0x539C7e1E454296Dc150B95a0acCC05bCa3b33538',
  records: {
    url: 'https://thurin.id',
    'com.github': 'thurinlabs',
    'com.twitter': 'thurinlabs',
    'id.thurin': '08B9374FDFBEC67EFFA24E669D3D86E35361EF7B',
    contenthash: 'ipfs://bafybeidondm2drq3empb7zs3cpnw53kfnznjp32j63xoxhqhvqt4skgvma',
  },
  includeUrls: true,
  iconSize: 36,
  hideSocials: ['vision', 'opensea', 'grails'],
}
