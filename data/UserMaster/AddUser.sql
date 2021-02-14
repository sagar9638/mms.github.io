
INSERT INTO [dbo].[UserMaster]
           ([RefId]
           ,[Name]
           ,[City]
           ,[DOB]
           ,[MobileNo]
           ,[EmailId]
           ,[EntUser]
           ,[EntDate]
           ,[UserName]
           ,[Password])
     VALUES
           (@RefId
           ,@Name
           ,@City
           ,@DOB 
           ,@MobileNo
           ,@EmailId
           ,@EntUser
           ,GETDATE()
           ,@UserName
           ,@Password);

SELECT SCOPE_IDENTITY() AS USERID




