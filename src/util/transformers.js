function compare(a, b) {
  if (!a || !a.name || !b || !b.name) return 0;
  if (a.name < b.name) return -1;
  if (a.name > b.name) return 1;
  return 0;
}

export const extractChannel = payload => {
  const values = (payload && payload.guild && payload.guild.channels) || [];
  return values
    .filter(channel => channel.type === "text")
    .sort(compare)
    .map(channel => ({
      key: channel.id,
      value: `#${channel.name}`,
    }));
};

export const extractRoles = payload => {
  const values = (payload && payload.guild && payload.guild.roles) || [];
  return values
    .filter(role => role.name !== "@everyone" && !role.managed)
    .sort(compare)
    .map(role => ({
      key: role.id,
      value: `@${role.name}`,
    }));
};
