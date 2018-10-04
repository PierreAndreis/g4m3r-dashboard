import gql from "graphql-tag";

export default gql`
  query guild($guildId: ID) {
    guild(id: $guildId) {
			roles {
				id
				name
				createdTimestamp
				color
				hoist
				permissions
				position
			}
    }
  }
`;
