function funWithAnagrams(text) {
  // Write your code here
  if (text.length === 0) return []

  const result = []

  const skips = []
  for (let i = 0; i < text.length; i++) {
    if (skips.includes(i)) continue
    result.push(text[i])

    for (let j = i + 1; j < text.length; j++) {
      if (anagrams(text[i], text[j])) {
        skips.push(j)
      }
    }
  }

  return result.sort()
}

function anagrams(str1, str2) {
  if (str1.length !== str2.length) return false
  let count = 0

  for (let i = 0; i < str1.length; i++) {
    if (str2.includes(str1[i])) {
      count++
    }
    if (str1.includes(str2[i])) {
      count--
    }
  }
  count === 0 ? true : false
}

/////////////////////////////////////////////
/////////////////////////////////////////////
/////////////////////////////////////////////

function maximumOccurringCharacter(text) {
  // Write your code here

  // hash, keys = char, values = char count
  // Object.values.max , find index of the max #
  // Object.keys <> Object.values,

  const count = {}
  const chars = text.split("")
  chars.forEach((char) => {
    count[char] ? (count[char] += 1) : (count[char] = 1)
  })

  const maxCount = Math.max(...Object.values(count))
  chars.forEach((char) => {
    if (count[char] === maxCount) {
      return char
    }
  })
}
/////////////////////////////////////////////
/////////////////////////////////////////////
/////////////////////////////////////////////


function finalInstances(instances, averageUtil) {
  // Write your code here

  // find finalInstance @ averageUtil.length-1
  // s1 -- if averageUtil < 25%
  // if instances > 1, ACTION instances /= 2
  // s2 -- if averageUtil 25% <= 60%, do nothing
  // s3 -- if averageUtil > 60%,
  // if instances * 2 > 2 * Math.pow(10, 8),
  // do nothing ELSE
  // ACTION instances *= 2

  // if action performed, skip 10 seconds (iterate + 10 places)

  const count = averageUtil.length

  let i = 0
  while (i < count) {
    if (averageUtil[i] < 25) {
      if (instances > 1) {
        instances /= 2
        i += 10
        break
      } else {
        i += 1
        break
      }
    } else if (averageUtil[i] >= 25 || averageUtil[i] <= 60) {
      i += 1
      break
    } else if (averageUtil[i] > 60) {
      if (instances * 2 < Math.pow(10, 8)) {
        instances *= 2
        i += 10
        break
      } else {
        i += 1
        break
      }
    }
  }

  return instances
}
/////////////////////////////////////////////
/////////////////////////////////////////////
/////////////////////////////////////////////

function countPairs(numbers, k) {
  // Write your code here
}