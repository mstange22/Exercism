import Foundation

class ListOps {

	public static func append<T>(_ list: [T], _ items: [T]) -> [T] {
		return list + items
	}

	public static func concat<T>(_ list: [T]...) -> [T] {
		var res = [T]();

		for item in list {
		  for e in item {
			res.append(e)
		  }
		}
		return res
	}

	static func map<T>(_ list: [T], _ predicate: (T) -> T) -> [T] {
		var res = [T]();
		for item in list {
			res.append(predicate(item))
		}
		return res
	}

	static func filter<T>(_ list: [T], _ predicate: (T) -> Bool) -> [T] {
		var res = [T]();
		for item in list {
			if predicate(item) {
				res.append(item)
			}
		}
		return res
	}
	
	static func foldLeft<T>(_ list: [T], accumulated: T, combine: (T, T) -> T) -> T {
		var res = accumulated
		for item in list {
			res = combine(res, item)
		}
		return res
	}
	
	static func foldRight<T>(_ list: [T], accumulated: T, combine: (T, T) -> T) -> T {
		var res = accumulated
		for item in self.reverse(list) {
			res = combine(item, res)
		}
		return res
	}
	
	static func length<T>(_ list: [T]) -> Int {
		var len = 0
		for _ in list {
			len += 1
		}
		return len
	}
	
	static func reverse<T>(_ list: [T]) -> [T] {
		var res = [T]();
		var i = list.count - 1
		while i >= 0 {
			res.append(list[i])
			i -= 1
		}
		return res
	}
}
