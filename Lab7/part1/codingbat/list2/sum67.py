def sum67(nums):
    nums=nums[:]
    while 6 in nums:
        i=nums.index(6)
        j=nums.index(7,i)
        del nums[i:j+1]
    return sum(nums)