module.exports = function check(str, bracketsConfig) { 
  const config = new Map(bracketsConfig);
  const st = []; 
  for (let i in str) 
    st.length > 0 && config.get(st[st.length - 1]) === str[i] ? st.pop() : st.push(str[i]); 
  return st.length === 0; 
};