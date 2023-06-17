package jbdc_test;
import java.sql.*;
import java.io.*;

public class Jdbc_select {

	public static void main(String[] args) throws Exception {
		// TODO Auto-generated method stub
		String url="jdbc:mysql://localhost:3306/health_bd";
		String uname="root";
		String pword="password";
		Class.forName("com.mysql.cj.jdbc.Driver");
		Connection c=DriverManager.getConnection(url,uname,pword);
		Statement s=c.createStatement();
		String sql="SELECT u.id,u.name,u.tech,s.hour,s.date FROM user u INNER JOIN sleep s ON s.uid=u.id ORDER BY s.hour DESC;";
		ResultSet rs=s.executeQuery(sql);
		while(rs.next())
		{
			System.out.println(rs.getInt(1)+" "+rs.getString(2)+" "+rs.getString(3)+" "+rs.getInt(4)+" "+rs.getString(5));
		}
		s.close();
		c.close();
	}

}
