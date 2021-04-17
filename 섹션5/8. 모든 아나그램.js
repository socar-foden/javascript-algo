// [풀이 본 후]
function solution(str_1 = "", str_2 = "") {
  let count = 0;
  const map_1 = getMap(str_1.substr(0, 3));
  const map_2 = getMap(str_2); // 기준이 되는 map

  // map 세팅
  function getMap(arr = []) {
    const map = new Map();

    for (let i = 0; i < arr.length; i++) {
      const key = arr[i];
      const org = map.get(key);

      if (!org) {
        map.set(key, 1);
      } else {
        map.set(key, org + 1);
      }
    }

    return map;
  }

  // map으로 아나그램 판별
  function isAnagram(map_1, map_2) {
    if (map_1.size !== map_2.size) {
      return false;
    }
    for (let [key_1, value_1] of map_1) {
      if (!map_2.get(key_1) || map_2.get(key_1) !== value_1) {
        return false;
      }
    }
    return true;
  }

  for (let i = str_2.length - 1; i < str_1.length; i++) {
    if (isAnagram(map_1, map_2)) {
      count++;
    }

    const prev_key = str_1[i - str_2.length + 1];
    const prev_org = map_1.get(prev_key);

    if (prev_org > 1) {
      map_1.set(prev_key, prev_org - 1);
    } else {
      map_1.delete(prev_key);
    }

    const next_key = str_1[i + 1];
    const next_org = map_1.get(next_key);
    if (!next_org) {
      map_1.set(next_key, 1);
    } else {
      map_1.set(next_key, next_org + 1);
    }
  }

  return count;
}

// b -> x
// b a -> x
// b a c -> o
//   a c a -> x
//     c a A -> x
//
//
//
//
//
//
//

console.log(solution("bacaAacba", "abc"));

// 풀이에서는 if 블록을 축약해서 많이 간결한 것 빼고는 같은거 같다.
